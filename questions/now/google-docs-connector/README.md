<!--ai-->
# How should a Google Docs connector authenticate and ship?

The native Claude Google Drive connector, `gog`, and our `gdoc` MCP all use Google
OAuth. They differ in where the OAuth callback runs, who owns the OAuth client, where
the refresh token is stored, and whether the MCP server runs in the cloud or on the
user's computer.

Last checked: 2026-07-17.

## The short version

| Mechanism | Where it runs | What the user does | Who owns the Google OAuth client | Where the Google refresh token lives |
| --- | --- | --- | --- | --- |
| Claude's native Drive connector | Anthropic's cloud | Click **Connect**, sign into Google | Anthropic | Anthropic's infrastructure |
| `gog` | User's computer | Run one command, sign into Google | The user or their organization | OS keyring |
| Our current `gdoc.mcpb` | User's computer | Authenticate `gdoc` in a terminal, then install | The user or their organization | `gdoc`'s local config |
| A remote `gdoc` MCP | Our cloud service | Click **Connect**, sign into Google | Us or the organization | Our service's credential store |

The terminal is not required by Google. It is required by our current implementation
because we wrapped a CLI that already handled OAuth in the terminal and deliberately
left `auth` out of the MCP tool surface.

The best experience for 80,000 Hours would be a remote MCP connector backed by an
organization-owned internal Google OAuth app. A Claude owner adds it once; each user
then clicks **Connect** and signs into Google. A better local `.mcpb` could also remove
the terminal, but it would initiate authorization from a chat tool or companion setup
window rather than using Claude's native connector-level **Connect** button.

## What happens after clicking “Connect” in Claude

Anthropic publicly documents the user-visible and data-handling parts:

- a Claude Team or Enterprise owner first enables the Google Workspace connectors;
- each user authenticates directly with their own Google account;
- Claude receives only that user's existing Google permissions;
- connector data and credentials are handled through Anthropic's infrastructure;
- a Google Workspace administrator may need to mark the **Claude** OAuth application
  as trusted.

Source: [Anthropic's Google Workspace connector documentation](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors).

Anthropic does not publish the connector's complete backend implementation. The
following sequence is therefore an inference from its documented behavior and Google's
standard authorization-code flow:

```text
User                  Claude/Anthropic                Google
 │ Click Connect              │                         │
 │───────────────────────────>│                         │
 │                            │ OAuth authorization URL │
 │<───────────────────────────│                         │
 │ Sign in and approve scopes ─────────────────────────>│
 │                            │<── authorization code ──│
 │                            │ exchange code for       │
 │                            │ access + refresh tokens │
 │                            │────────────────────────>│
 │ Connected                  │                         │
 │<───────────────────────────│                         │
```

The OAuth client identifies Claude as the application. The authorization code proves
that one user approved the requested scopes. Anthropic exchanges that one-use code for:

- a short-lived **access token**, sent with Google API calls; and
- usually a longer-lived **refresh token**, used to obtain new access tokens without
  asking the user to sign in on every request.

This is why a Google OAuth client ID and secret are not a substitute for a user's
authorization. They identify the application; they do not grant access to anybody's
Drive. Google's [installed-app OAuth documentation](https://developers.google.com/identity/protocols/oauth2/native-app)
describes the authorization-code and refresh-token exchange.

The native connector feels simpler because Anthropic has already done the work that a
CLI user otherwise has to do:

- register and maintain the Google OAuth application;
- host the callback endpoint;
- store and refresh tokens securely;
- integrate authorization into Claude's settings UI; and
- operate the connector service that calls Google.

It is a cloud connector, not an `.mcpb` installed on the user's computer. Anthropic says
retrieved Google data is stored on its servers with the associated chat. Its published
Drive connector also has a narrower feature set than `gdoc`: it cannot see Google Docs
comments or suggestions, for example.

## How `gog` does the same thing locally

`gog auth add <email>` implements the same Google OAuth protocol, but replaces
Anthropic's hosted callback and token store with local equivalents:

```text
gog CLI              Browser                     Google
  │ start temporary     │                           │
  │ 127.0.0.1 listener  │                           │
  │ open authorization URL ────────────────────────>│
  │                     │ sign in and approve       │
  │<── authorization code via 127.0.0.1 redirect ──│
  │ exchange code for tokens ──────────────────────>│
  │ store refresh token in OS keyring               │
```

Specifically, `gog`:

- uses a Desktop OAuth client;
- opens the system browser;
- listens temporarily on an ephemeral `127.0.0.1` port for Google's redirect;
- binds the exchange with S256 PKCE and validates OAuth state;
- requests offline access so Google can issue a refresh token; and
- stores the refresh token in Keychain on macOS, Credential Manager on Windows, or a
  supported Linux secret service.

Source: [`gog`'s authentication quickstart](https://github.com/openclaw/gogcli/blob/621757c686ee8d2c8d85499e8d0f4f5eedcdd964/docs/quickstart.md#4-authorize-an-account)
and [OAuth specification](https://github.com/openclaw/gogcli/blob/621757c686ee8d2c8d85499e8d0f4f5eedcdd964/docs/spec.md#oauth-flow).

The terminal command only starts the local flow. The user still grants access on
Google's normal webpage, just as with Claude's **Connect** button.

An organization can eliminate most of `gog`'s setup by creating one internal OAuth
client and distributing it to users. Each user must still authorize their account once,
but they do not need to create a Cloud project or OAuth credentials.

## What an `.mcpb` file is

The correct name is **MCPB**, for MCP Bundle. The format was previously called DXT;
`.dxt` and the `dxt` CLI were renamed to `.mcpb` and `mcpb`.

An `.mcpb` is a ZIP archive containing a local MCP server and a `manifest.json`. It is
analogous to a Chrome `.crx` or VS Code `.vsix`: packaging plus installation metadata,
not a new executable format and not an authentication protocol.

Typical contents:

```text
gdoc.mcpb
├── manifest.json       name, version, launch command, configuration, compatibility
├── server/             the MCP server that speaks MCP over standard input/output
├── node_modules/       bundled JavaScript dependencies
└── bin/                optional native executables such as gdoc-arm64
```

When the user opens the file, Claude Desktop:

1. validates and unpacks it;
2. shows its install/configuration UI;
3. substitutes configured values into the manifest's command and environment;
4. starts the local MCP server; and
5. communicates with it using MCP over standard input/output.

The bundle can ask for static configuration such as an API token, directory, or binary
path. MCPB itself does not implement a Google OAuth **Connect** button. Code inside the
bundle must implement OAuth, open a browser, handle the callback, and store the token.

Source: the official [MCPB repository](https://github.com/modelcontextprotocol/mcpb)
and [manifest specification](https://github.com/modelcontextprotocol/mcpb/blob/main/MANIFEST.md).

## Operating systems and chips

MCPB is a cross-platform container format. Whether a particular bundle is portable
depends on its contents.

| Bundle contents | Portability |
| --- | --- |
| Pure JavaScript using Claude's bundled Node runtime | Usually one bundle for macOS and Windows |
| Python through MCPB's managed `uv` runtime | Intended to be cross-platform; dependencies still need compatible wheels |
| Python environment copied from one machine | Usually tied to that OS and sometimes that CPU |
| Native executable | Must match the operating system and CPU architecture |
| Several native executables plus runtime selection | One bundle can support several OS/CPU combinations |

The manifest can declare `darwin`, `win32`, and `linux` compatibility. Claude's official
MCPB implementation is documented for its macOS and Windows desktop applications. The
manifest does not by itself transform a macOS binary into a Windows binary or an Arm
binary into an Intel binary.

### Our current bundle

Our released `gdoc-arm64.mcpb` works only on Apple Silicon Macs:

- its manifest declares only `darwin`;
- it contains a PyInstaller-built Mach-O `arm64` executable;
- it does not contain an Intel macOS binary; and
- it does not contain a Windows `.exe`.

Therefore:

| Computer | Current release |
| --- | --- |
| Apple Silicon Mac: M1, M2, M3, M4, etc. | Yes |
| Intel Mac | No |
| Windows x86-64 | No |
| Windows on Arm | No |
| Linux | No |

This is a property of our payload, not MCPB itself.

We could support Intel Macs and Windows in either of two ways:

1. Build `gdoc` separately on macOS Arm, macOS Intel, and Windows, include every binary,
   then let the JavaScript wrapper select by `process.platform` and `process.arch`.
2. Stop freezing `gdoc` into a native executable and use MCPB's managed `uv` runtime to
   install the Python project and platform-appropriate dependencies.

Separate native release files are simpler to test and about 32 MB each. A multi-platform
bundle is easier for users to choose but larger and still needs a CI test on every target.

## Local MCPB versus remote MCP

This is the choice that determines whether Claude can provide the familiar **Connect**
experience.

| | Local MCPB | Remote MCP connector |
| --- | --- | --- |
| Server location | User's computer | Publicly reachable service |
| Installation | Open a downloaded file | Owner adds a URL; user clicks **Connect** |
| OAuth UI | Bundle must implement it | Claude supports connector OAuth |
| Token storage | User's machine | Remote service |
| Works in claude.ai/mobile | No | Yes |
| Local filesystem access | Possible | No direct access |
| Operations burden | Build per platform | Host, secure, monitor, and update service |

Anthropic documents that remote MCP connections originate from its cloud, even when the
user is in Claude Desktop or Cowork. On Team and Enterprise, an owner adds the remote MCP
URL once; members then see a **Connect** button and authenticate individually. Source:
[Anthropic's remote MCP connector guide](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp).

A remote `gdoc` connector would normally have two authorization relationships:

```text
Claude user ── OAuth ──> our MCP service ── Google OAuth ──> Google Workspace
```

Our service would act as an OAuth broker: authenticate the Claude connection, redirect
the user to Google, associate Google's refresh token with the correct user, and issue
Claude a credential for the MCP service. The user experience can match the native
connector, but we become responsible for a public service and high-value refresh tokens.

## What an 80,000 Hours administrator can centralize

For either a better local bundle or a remote connector, a Google Workspace administrator
can do the following once:

1. Create the Cloud project inside the 80,000 Hours organization.
2. Enable the required Google APIs.
3. Configure the OAuth audience as **Internal**.
4. Create the OAuth client used by the connector.
5. Review its scopes and mark the client as trusted in Workspace API Controls.
6. Own the project lifecycle rather than tying it to one employee's personal project.

Google recommends placing Workspace applications inside the organization's Cloud
resource, and administrators can restrict or trust applications by OAuth client ID.
Sources: [Google OAuth consent configuration](https://developers.google.com/workspace/guides/configure-oauth-consent)
and [Workspace application controls](https://knowledge.workspace.google.com/admin/apps/control-which-apps-access-google-workspace-data).

For Claude's native Drive connector, the centralized actions already available are:

1. a Claude Owner or Primary Owner enables Google Workspace connectors; and
2. a Google Workspace administrator marks **Claude** as trusted if organizational policy
   would otherwise block it.

Each person still clicks **Connect** because access follows their identity and existing
Drive permissions.

## Recommendation

Choose based on the desired outcome:

- **Only Alejo or a few technical users need the richer `gdoc` tools:** keep MCPB local,
  add a `connect_google` tool that opens the browser flow, and publish builds for each
  required platform. This avoids hosting credentials and removes the terminal.
- **Several 80,000 Hours staff should get the same one-click experience as native
  Drive:** operate `gdoc` as a remote MCP connector using an organization-owned internal
  Google OAuth app. The Claude owner adds it once; users click **Connect**.
- **The native connector already covers the workflow:** use it. It has the smallest
  operating burden, but it currently lacks comments, suggestions, and some of `gdoc`'s
  editing and revision tools.

Do not distribute a domain-wide service-account key inside an MCPB. Google says client
applications should use user OAuth and warns against embedding or distributing service
account keys. Domain-wide delegation is suitable only for a centrally operated service
with narrowly authorized scopes and keyless workload credentials. Source:
[Google's service-account key guidance](https://docs.cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).

For 80,000 Hours, the recommendation changes at roughly five recurring users: below
that, improving and cross-building the local bundle is cheaper; above that, a remote
connector's uniform onboarding and updates likely justify its hosting and security work.
<!--/ai-->
