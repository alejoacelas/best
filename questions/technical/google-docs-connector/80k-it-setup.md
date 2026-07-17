# What does 80,000 Hours IT need to set up for the gdoc connector?

## Decision requested

Approve and own an internal Google OAuth application for the hosted `gdoc` MCP
connector. A Claude owner adds the connector once; each staff member clicks **Connect**
and authorizes their own Google account. The connector gets only that user's existing
Drive permissions.

The Google Cloud project, OAuth client, production host, encryption key, and token store
should belong to 80,000 Hours. The personal deployment is for testing only. Using an
organization-owned OAuth client with an employee-owned server would still send staff
refresh tokens to infrastructure outside the organization's control.

## What IT needs to do

### 1. Choose the owners

- Name an owner for the Google Cloud project and OAuth client.
- Name an owner for the hosted MCP service and its encrypted token store.
- Keep at least two current administrators so the system does not depend on one employee.
- Decide where secrets will be handed over and retained, such as an organization-owned
  1Password vault or cloud secret manager. Do not send the client secret through Slack,
  email, or this document.

Google recommends creating Workspace applications inside the organization's Cloud
resource so access controls, notifications, and lifecycle do not depend on an individual
account. [Google's Workspace OAuth guidance](https://developers.google.com/identity/protocols/oauth2/production-readiness/google-workspace)

### 2. Create the Google Cloud project

Create a new project inside the 80,000 Hours Google Cloud organization. Suggested name:
`gdoc-mcp-production`.

Enable:

- Google Drive API
- Google Docs API
- Google Sheets API

[Google's Workspace API guide](https://developers.google.com/workspace/guides/enable-apis)
links directly to each API.

### 3. Configure the OAuth application

In **Google Auth Platform**:

- Branding
  - App name: `80,000 Hours gdoc connector`
  - User support email: an IT-managed address
  - Developer contact email: an IT-managed address
- Audience: **Internal**
- Data access used by the service
  - `openid`
  - `https://www.googleapis.com/auth/userinfo.email`
  - `https://www.googleapis.com/auth/drive`
  - `https://www.googleapis.com/auth/documents`

An Internal audience limits authorization to accounts in the organization's Workspace or
Cloud Identity organization and avoids public-app verification. The runtime requests the
scopes above even if Google's Internal-app screen does not require IT to declare them
manually. [Google's consent-screen guide](https://developers.google.com/workspace/guides/configure-oauth-consent)

### 4. Create one Web OAuth client

Wait for the deployment owner to provide the final production hostname. They will send:

```text
MCP URL:      https://<organization-owned-host>/mcp
OAuth return: https://<organization-owned-host>/oauth/google/callback
```

Then open **Google Auth Platform → Clients**:

1. Click **Create Client**.
2. Choose **Web application**.
3. Name it `gdoc remote MCP production`.
4. Leave **Authorized JavaScript origins** empty.
5. Add the exact OAuth return URL as the sole **Authorized redirect URI**.
6. Create the client.

Do not reuse the personal test client or create a Desktop client. A hosted service needs
a Web client whose redirect URI exactly matches its public callback.
[Google's credential guide](https://developers.google.com/workspace/guides/create-credentials#web)

### 5. Approve access in Workspace

In the Google Admin console, go to **Security → Access and data control → API controls →
Manage App Access → Configure new app**. Search for the OAuth client ID.

Choose one:

- **Specific Google data**: allow Google sign-in, Drive, and Docs scopes only. Prefer
  this if the Admin console exposes the exact scopes required above.
- **Trusted**: allows the client to request any Google Workspace scope. Use this only if
  Specific Google data does not support the required Drive and sign-in scopes.

Apply the setting first to a pilot group or organizational unit, then to the intended
staff group after testing. Google documents the available Trusted, Limited, Specific
Google data, and Blocked policies in its
[API Controls guide](https://support.google.com/a/answer/7281227).

### 6. Hand off the credentials

Put the Web client's `client_id` and `client_secret` in the agreed organization-owned
secret manager. Give the deployment owner access to that item. The deployment owner will:

1. import the values into the hosted service's secret store;
2. set `ALLOWED_GOOGLE_DOMAIN=80000hours.org`;
3. deploy the service without placing credentials in Git or the container image;
4. return the live MCP URL and evidence that OAuth discovery, callback, and health checks
   pass.

Send back in a non-secret message:

- Google Cloud project ID
- OAuth client ID
- confirmation that the audience is Internal
- confirmation that Drive, Docs, and Sheets APIs are enabled
- confirmation of the Workspace API Controls policy and pilot group
- the person who owns OAuth revocation and incident response

The client secret itself belongs only in the secret manager.

### 7. Add the connector to Claude

After deployment, a Claude Owner or Primary Owner goes to **Organization settings →
Connectors → Add → Custom → Web**, enters the MCP URL, and leaves Claude's advanced OAuth
client fields empty. The MCP service supports dynamic client registration.

Staff then go to **Customize → Connectors**, find the custom connector, click **Connect**,
and approve access with their own 80,000 Hours Google account.
[Anthropic's remote connector guide](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)

## Access being approved

The current connector can:

- list and search files the user can access;
- read Docs and Sheets;
- read revisions and comment threads;
- create, copy, and edit documents;
- add, reply to, resolve, and reopen comments; and
- share documents.

It has no delete tool. The Google Drive scope is nevertheless broad: the OAuth grant
technically permits the hosted application to access the user's Drive within that user's
permissions. The MCP tool allowlist constrains today's product behavior; it does not
narrow Google's underlying OAuth grant.

If IT will not approve full Drive access, stop before deployment. Replacing it with
`drive.file` would require a file-picker or explicit-file workflow and would remove the
connector's ability to search or read arbitrary existing documents.

## What IT does not need to create

- No service account
- No domain-wide delegation
- No domain-wide private key
- No API key
- No shared Google account
- No OAuth client per employee
- No employee passwords

Each employee grants and can revoke their own access. Workspace administrators can also
block the OAuth client centrally. The connector stores individual Google refresh tokens
encrypted at rest; it never sends them to Claude.

## Pilot acceptance test

Use one to three staff accounts in the pilot group:

1. Claude shows **Connect** and redirects to the 80,000 Hours-branded Google consent
   screen.
2. A non-`80000hours.org` account is rejected.
3. Each pilot can list and read only files already available to that person.
4. A pilot can create a test Doc, write one sentence, read it back, and share it.
5. Another pilot cannot read that Doc until it is shared with them.
6. Revoking the app in Workspace API Controls prevents further Google access.
7. Server logs contain errors and request metadata but no OAuth codes, access tokens,
   refresh tokens, or document contents.

Roll out only after all seven checks pass.

## Division of responsibility

| 80,000 Hours IT | Deployment owner | Each staff member |
| --- | --- | --- |
| Own Cloud project, OAuth client, API policy, secrets, and production hosting | Deploy and monitor the MCP service; import secrets; prove the checks above | Click Connect and grant or revoke their own Google access |
| Approve scopes and pilot group | Maintain the tool allowlist and security updates | Use only files their Google account can already access |
| Revoke the client during an incident | Revoke and delete stored tokens when access ends | Review Claude's requested actions |

## Sources

- [Enable Google Workspace APIs](https://developers.google.com/workspace/guides/enable-apis)
- [Configure OAuth consent](https://developers.google.com/workspace/guides/configure-oauth-consent)
- [Create a Web OAuth client](https://developers.google.com/workspace/guides/create-credentials#web)
- [Google Workspace OAuth considerations](https://developers.google.com/identity/protocols/oauth2/production-readiness/google-workspace)
- [Control app access in Google Workspace](https://support.google.com/a/answer/7281227)
- [Configure Claude remote MCP connectors](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)
