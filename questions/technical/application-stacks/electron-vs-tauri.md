<!--ai-->
# When should I use Electron, Tauri, or a custom WebView host?

Think of them as points on a spectrum:

```text
More bundled machinery                         More platform ownership
Electron ───────── Tauri ───────── custom native host + system WebView
```

The real trade is not heavy versus light:

- Electron pays in bundle and runtime overhead.
- Tauri pays in cross-browser testing and Rust/native boundaries.
- A custom shell pays in engineering and long-term platform maintenance.

## Cost comparison

| Cost | Electron | Tauri | Custom WKWebView/WebView2 host |
|---|---|---|---|
| Browser engine | Chromium bundled per app | Uses the OS WebView | Uses the OS WebView |
| Backend | Node included | Rust by default; Node requires a sidecar | Whatever the host supplies: Swift, C#, Rust, or another runtime |
| Bundle size | Usually hundreds of MB installed | A minimal app can be under 600 KB; real apps are larger | Potentially very small |
| Runtime memory | Chromium, Node, and helper processes | WebView processes and Rust core | WebView and native host |
| Rendering consistency | High: the same Chromium version everywhere | Lower: WKWebView, WebView2, and WebKitGTK differ | The same cross-platform problem unless targeting one OS |
| Web and Node reuse | Excellent | UI reuse is excellent; Node backend reuse is poor | Entirely the team's responsibility |
| Native APIs | Mature Electron APIs and npm modules | Tauri plugins or Rust, Swift, and Kotlin code | Direct access, but every bridge must be built |
| Security model | Powerful Node process; preload and IPC must be restricted | Narrow permission and command model | Only as good as the boundary the team designs |
| Escape hatches | Native Node modules or helper processes | Rust plugins and sidecars | Unlimited because the team owns everything |
| Browser upgrades | The app ships Chromium security updates | Apple or Microsoft updates the WebView | Apple or Microsoft updates the WebView; the app maintains the host |
| Initial engineering cost for a web team | Lowest | Moderate | Highest |
| Long-term platform control | Moderate | Moderate | Highest |

Electron embeds Chromium and Node and separates the privileged main process from browser-like renderer processes. This supplies a predictable browser and a ready-made desktop API, but every application carries and services that machinery. [Electron overview](https://www.electronjs.org/docs/latest/) · [Electron process model](https://www.electronjs.org/docs/latest/tutorial/process-model)

Tauri uses WKWebView on macOS, WebView2 on Windows, and WebKitGTK on Linux. Its Rust core owns privileged operations while the frontend calls explicitly exposed commands. This removes the bundled browser but introduces browser-engine variation. [Tauri overview](https://tauri.app/start/) · [Tauri process model](https://v2.tauri.app/concept/process-model/)

## What a WebView is

A WebView is a browser rendering surface embedded inside another application:

```text
native application window
├── native menu, title bar, shortcuts, file dialogs, …
└── WebView
    ├── HTML document and DOM
    ├── CSS layout and rendering
    └── JavaScript and browser APIs
```

The operating system supplies the browser engine. Apple exposes `WKWebView` as an AppKit/UIKit view; Microsoft exposes the Edge-based WebView2 runtime. The host application creates the view, chooses which content it loads, controls navigation, and places it beside native controls. [Apple WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) · [Microsoft WebView2](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/end-user-faq)

A WebView supplies:

- HTML, CSS, the DOM, JavaScript, canvas, media, accessibility, and ordinary browser networking;
- a place to reuse a web application's interface and frontend libraries;
- browser developer tools; and
- a message bridge through which JavaScript can request work from the native host.

A WebView does not supply:

- an address bar, tabs, bookmarks, browser extensions, or the rest of a browser product;
- unrestricted file, shell, process, credential, or operating-system access;
- application menus, tray items, installers, updates, or native lifecycle management; or
- a cross-platform backend.

The default WebView JavaScript environment is intentionally browser-like and sandboxed. To save a file, launch a process, or read a credential, frontend code sends a message to the host:

```text
JavaScript: saveDocument(text)
          │ serialized message
          ▼
native host: validate request → write allowed file → return result
```

Tauri supplies this host, bridge, permission model, packaging, and plugins. A custom WebView application implements those parts itself.

The system-WebView advantage is shared machinery: the application need not distribute a second browser engine. The costs are:

- WKWebView, WebView2, and WebKitGTK are different engines with different release schedules;
- an OS update can change rendering or behavior independently of an app release;
- frontend code must use feature detection and a compatibility test matrix;
- DOM controls remain web-rendered rather than becoming AppKit or WinUI controls; and
- the WebView still creates rendering processes and consumes memory while running.

On Windows, WebView2 normally uses the shared, automatically updated Evergreen runtime. This reduces per-app disk cost but means applications must remain forward-compatible. [WebView2 distribution model](https://learn.microsoft.com/en-us/microsoft-edge/webview2/concepts/evergreen-vs-fixed-version)

## What Node is

Node.js runs JavaScript outside a browser using the V8 engine. It is an application and server runtime, not a UI toolkit. Its standard library and npm ecosystem give JavaScript controlled by the application—not a webpage—access to operating-system capabilities. [Node.js introduction](https://nodejs.org/learn/getting-started/introduction-to-nodejs)

Node makes these tasks direct:

- reading, writing, watching, and traversing files;
- opening TCP connections and running HTTP or WebSocket servers;
- spawning command-line programs and communicating through standard input/output;
- reading arguments, environment variables, and process state;
- streaming large files or network responses without loading them entirely into memory;
- using hundreds of thousands of npm packages; and
- calling C, C++, Rust, or other native code through addons or child processes.

The relevant standard-library surfaces include the [filesystem](https://nodejs.org/api/fs.html) and [child-process](https://nodejs.org/api/child_process.html) APIs.

Node is especially convenient for:

- CLIs, local servers, build tools, language servers, and file watchers;
- applications whose frontend and backend teams already use TypeScript;
- I/O-heavy work with many concurrent files, sockets, or requests; and
- wrapping existing command-line programs.

Node's main JavaScript execution is event-loop based. Asynchronous file and network operations can proceed without one thread per request, but long synchronous or CPU-heavy JavaScript blocks other work in that process. CPU-heavy work therefore moves to worker threads, native code, or separate processes.

Its costs are:

- **Authority:** ordinary Node code can access the user's files and launch programs. Exposing Node directly to untrusted or remotely loaded web content turns a webpage compromise into computer access.
- **Runtime:** the application must distribute or depend on a compatible Node runtime.
- **Dependencies:** npm packages add update, supply-chain, and transitive-dependency work.
- **Native modules:** packages containing compiled code need binaries for each operating system and CPU and may require rebuilding for a new Node or Electron version.
- **UI separation:** Node does not draw windows or controls. A browser, WebView, or native frontend must communicate with it.

Electron includes Node in its privileged main and utility processes. Modern Electron renderers remain sandboxed; a preload/IPC boundary exposes only the operations the UI needs. [Electron process model](https://www.electronjs.org/docs/latest/tutorial/process-model) · [Electron IPC](https://www.electronjs.org/docs/latest/tutorial/ipc)

Tauri replaces that Node role with a Rust core. A Tauri application can still ship Node as a sidecar, but then it retains Node's runtime and process costs while saving mainly the bundled Chromium cost.

## Where Electron's cost buys something

Choose Electron when the product needs at least one of these:

- substantial existing Node code;
- Node packages that invoke processes, manage files, run language servers, or implement extensions;
- exactly the same browser behavior across macOS, Windows, and Linux;
- Chromium-specific APIs or unusually complicated editors, canvas, WebGL, media, accessibility, or browser tooling;
- the fastest path for a React/TypeScript team; or
- independent control over when the browser engine changes.

The large bundle buys a controlled execution environment. It is closer to distributing the application with its own browser and server runtime.

The recurring costs are:

- large downloads and updates;
- several processes and a meaningful idle-memory floor;
- responsibility for upgrading Electron when Chromium security fixes ship;
- native modules that may require work across Electron and Node upgrades; and
- a renderer/preload/main-process security boundary that must be designed correctly.

## Where Tauri's savings come from

Tauri does not eliminate the browser. It borrows the one already installed by the operating system.

This produces two important savings:

- the browser engine is absent from the installer; and
- security updates for the WebView generally come from Apple or Microsoft rather than an app release.

Tauri's corresponding costs are:

- testing WKWebView, WebView2, and WebKitGTK instead of one Chromium build;
- feature detection and workarounds for engine differences;
- enough Rust knowledge to own the privileged core safely;
- replacing Node packages with Rust libraries, Tauri plugins, or sidecar processes; and
- designing typed frontend-to-Rust commands instead of importing Node APIs.

Small bundle does not imply tiny memory use. The operating system still launches WebView renderer processes. Tauri primarily removes duplicated browser files and Node, not the runtime cost of displaying a web application.

## What a custom WebView host buys

A custom host might use:

```text
macOS: Swift/AppKit + WKWebView
Windows: C#/WPF or WinUI + WebView2
shared: React/TypeScript web UI
```

Apple explicitly supports placing `WKWebView` alongside native views. [WKWebView documentation](https://developer.apple.com/documentation/webkit/wkwebview)

This is strongest when native behavior around the web content is the product:

- native command palette, menus, panels, tray item, popovers, or window management;
- a platform-specific background service;
- native accessibility or input behavior around a central web editor;
- different Mac and Windows shells containing the same shared product UI; or
- precise control over process lifetime and privileged APIs.

The team now owns what Tauri or Electron would otherwise provide:

- window creation and restoration;
- IPC serialization, permissions, and cancellation;
- navigation restrictions and content-security policy;
- file dialogs, notifications, deep links, single-instance handling, and updates;
- crash reporting and logging across frontend and host;
- WebView initialization and version detection;
- separate Swift and C# implementations and tests; and
- signing, notarization, installers, and platform-specific release failures.

Choose this only when something the native host must do is awkward in Tauri. Otherwise, it becomes an internal framework the team must maintain.

The default rule:

- **Electron:** choose consistency and existing Node leverage.
- **Tauri:** choose smaller distribution and a narrow native backend.
- **Custom WebView host:** choose explicit platform ownership.
- **Native UI with an occasional WebView:** choose this when the product is fundamentally a Mac or Windows tool, not a website in a window.
<!--/ai-->
