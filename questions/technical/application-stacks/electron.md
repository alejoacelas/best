<!--ai-->
# Electron from a web-app mental model

Electron is a desktop runtime that bundles Chromium, Node.js, and APIs for native application behavior. The interface can be an ordinary HTML/CSS/JavaScript app, but a separate privileged process can create windows and use operating-system features.

It does not translate React into Swift or native controls. Chromium still renders the page. The packaged app carries its own Chromium and Node runtimes rather than using the installed Chrome or system Node. “A web app with its own browser and a desktop process” is the right starting model. [Electron prerequisites](https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites)

## The general architecture

An Electron app normally has three layers:

1. **Main process:** one privileged Node.js process controls application lifecycle, windows, menus, dialogs, shortcuts, notifications, and other desktop APIs.
2. **Renderer process:** each window runs web content in Chromium, much like a browser tab. A secure renderer has Web APIs but no direct Node.js or filesystem access.
3. **Preload bridge, optional:** a small privileged script can expose a deliberately narrow API from the main process to the renderer. Messages cross the process boundary through IPC.

Electron also inherits Chromium's helper processes for rendering, GPU work, networking, and crash isolation. Packaging places the app's code and an Electron runtime inside a macOS `.app`, Windows executable, or Linux package. [Electron process model](https://www.electronjs.org/docs/latest/tutorial/process-model) · [packaging](https://www.electronjs.org/docs/latest/tutorial/application-distribution)

The split matters. JavaScript in a renderer is not automatically privileged just because Electron is present. The app author decides what, if anything, the renderer can ask the main process to do.

## What runs where in Roughdraft

Roughdraft uses Electron more narrowly than most desktop apps:

```text
roughdraft CLI and background server — separate Node.js process
├── starts an Express server on localhost
├── reads and writes Markdown files
├── serves the built React app and its API
└── sends file-open requests, then launches or focuses Roughdraft.app

Roughdraft.app — Electron
├── main process
│   ├── owns the macOS app identity and one native window
│   ├── locates and verifies the managed localhost server
│   ├── controls activation, close shortcuts, and external links
│   └── restricts navigation and permissions
└── renderer process
    └── runs the React editor in Chromium
        ├── fetches files through the localhost API
        └── receives file and open events through EventSource
```

The file server does **not** run inside Electron. It is the same Node/Express machinery used by the browser version. The Electron window loads `http://localhost:7373`; the React client communicates with the server through HTTP and server-sent events, not Electron IPC. [desktop entry point](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/packages/desktop/src/main.ts) · [React API client](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/packages/app/src/api-backend.ts) · [Express server](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/packages/server/src/index.ts)

Roughdraft has no preload script, `contextBridge`, or Electron IPC API. Its renderer cannot call Node or Electron. For this app, “wrapper” is accurate: Electron contributes a native shell and deliberately stays out of document storage and editing.

## Affordances and restrictions

| Concern | Browser web app | Electron can provide | Roughdraft's choice |
|---|---|---|---|
| Window and identity | A tab owned by Chrome or Safari | Its own app, Dock icon, window lifecycle, menus, tray, and shortcuts | One Roughdraft window, Dock identity, activation, and `⌘W` handling |
| Filesystem | User-mediated file picker or browser storage | Direct file access through Node or a narrow preload API | No renderer access; the separate local server reads and writes the chosen Markdown file |
| Other programs | Links and browser-approved protocols | Launch programs, reveal files, spawn processes, or use the shell | Only HTTP(S) links may open in the default browser |
| Hardware and permissions | Browser permission model | Camera, microphone, notifications, screen capture, and OS APIs | Every renderer permission request is denied |
| Navigation | The user can browse elsewhere | The app can allow, intercept, or deny navigation and new windows | Locked to the verified localhost origin; new windows are denied |
| Networking | Browser CORS, cookies, and sandbox | Chromium networking plus privileged Node networking | Renderer connects only to its own origin under a restrictive Content Security Policy |
| Privileged bridge | None beyond browser APIs | Preload code can expose selected native operations through IPC | No bridge at all |
| Distribution | Deploy a server and refresh the page | Ship an installable, signed, versioned desktop app with bundled assets | A locally built and signed macOS app; no updater |
| Engine updates | The user's browser updates Chromium/WebKit | The app chooses and ships its Chromium and Node versions | Updating the fork is required to update Electron |

Electron therefore both **adds power** and **creates places to restrict that power**. Its main process can do far more than browser JavaScript, while a sandboxed renderer can be kept close to normal web-page privileges. Roughdraft explicitly enables sandboxing and context isolation, disables Node integration, keeps web security on, denies permissions, adds a restrictive Content Security Policy, and blocks navigation outside its verified origin. [Roughdraft desktop code](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/packages/desktop/src/main.ts) · [target validation](https://github.com/peterhartree/roughdraft/blob/d4c6c306e64c4588cedb1c19e52f59c8e6ddf391/packages/desktop/src/server-target.ts)

## What a less restricted Electron app could do

A richer app might expose calls such as:

```ts
window.desktop.openFilePicker()
window.desktop.readWorkspaceFile(path)
window.desktop.showNotification(message)
window.desktop.runCommand(command)
```

The renderer would call these like JavaScript functions, but a preload bridge would validate the arguments, send an IPC message, and let the privileged main process perform the operation. Electron recommends exposing one narrow method per operation rather than handing the renderer raw IPC or Node access. [Context isolation](https://www.electronjs.org/docs/latest/tutorial/context-isolation)

This is the main security difference from the web. In a browser, an XSS bug is usually contained by browser permissions. In an Electron renderer with broad Node access, the same bug could read files or run commands. Electron's guidance therefore calls for current releases, no Node integration for remote content, context isolation, sandboxing, permission handlers, a Content Security Policy, and restricted navigation. [Electron security checklist](https://www.electronjs.org/docs/latest/tutorial/security) · [process sandboxing](https://www.electronjs.org/docs/latest/tutorial/sandbox)

## Familiar points on the spectrum

- **A normal website:** shared browser, browser sandbox, no app-owned privileged process.
- **An installed PWA:** app-like icon and window, but it still lives within browser capabilities.
- **Roughdraft:** almost the PWA model, plus a native app identity and activation behavior. File power remains in a separate localhost server rather than an Electron bridge.
- **Slack:** an Electron shell around web technology with deeper desktop integration. Slack has described both its Chromium process model and the memory cost of running separate web clients in separate renderer processes. [Slack's hybrid architecture](https://slack.engineering/building-hybrid-applications-with-electron/) · [Slack's desktop rewrite](https://slack.engineering/rebuilding-slack-on-the-desktop/)
- **Visual Studio Code:** Electron at the powerful end. Chromium renders the interface, while separate privileged processes support files, terminals, extensions, and remote work. VS Code isolates extensions from the renderer in an extension-host process. [VS Code on Electron](https://code.visualstudio.com/docs/setup/network) · [VS Code process sandboxing](https://code.visualstudio.com/blogs/2022/11/28/vscode-sandbox)
- **Granola and Wispr Flow:** their running macOS bundles on this machine also contain Electron Framework, so their interfaces are likely Chromium-rendered even though they present as normal desktop apps.
- **A native Swift app:** uses AppKit or SwiftUI directly instead of shipping Chromium and Node. It normally gets native controls, smaller distribution, and closer OS conventions, at the cost of less direct reuse of a web codebase.

## Costs that come with Electron

- Every app ships its own Electron, Chromium, and Node versions, increasing download size and memory use relative to a small native app.
- The publisher, not the user's browser, must ship framework security updates.
- Chromium's multi-process isolation uses several helper processes even for one visible window.
- macOS and Windows distribution require platform packaging, signing, and usually notarization or installer work. [Electron distribution overview](https://www.electronjs.org/docs/latest/tutorial/distribution-overview)
- Web UI does not become automatically native-looking or native-behaving; keyboard, accessibility, menus, window behavior, and performance still need deliberate work.
- Cross-platform source reuse is high, but packaging, signing, permissions, and some integrations remain platform-specific.

The short version: Electron supplies a private Chromium browser plus a privileged Node-powered application process. Roughdraft uses the browser and native-window parts, rejects a renderer-to-Node bridge, and leaves file access in its existing localhost server. That makes it closer to a locked-down dedicated browser than to VS Code.
<!--/ai-->
