<!--ai-->
# Desktop application stacks: macOS and Windows

This is a field guide to <!--me-->actual examples<!--/me--> of desktop stacks, what each makes unusually easy, what becomes expensive, and which alternatives are closest. The macOS examples start with applications installed on this computer on 2026-07-26.

## The short answer

Desktop software is not mostly Electron. Electron is unusually visible among cross-platform communication, productivity, AI, and developer tools. Native Apple frameworks dominate Mac-specific software; Win32 and .NET account for a large part of Windows software; Qt remains common in C++ and engineering products.

For a web developer:

1. Learn Electron for cross-platform, web-shaped products.
2. Learn SwiftUI and enough AppKit for Mac-shaped products.
3. Learn C# and WinUI for Windows-shaped products.
4. Reach for Tauri only when Electron's measured package or runtime cost matters.
5. Learn Qt, Flutter, React Native Desktop, Avalonia, or the IntelliJ Platform when the product already matches their niche.

## What “stack” means

A desktop stack normally has at least four layers:

```text
product code
├── interface: React, SwiftUI, AppKit, WinUI, Qt, Flutter, …
├── application runtime: Node, .NET, JVM, Rust, C++, …
├── operating-system bridge: Electron main process, native APIs, WebView host, …
└── distribution: app bundle or installer, signing, updates, crash reporting
```

Electron is therefore not an alternative to React. A common stack is Electron + React + TypeScript + Node. It can also call Rust, C++, Swift, or C# code.

## What is installed on this Mac

Bundle size is the current uncompressed size reported by `du`; it is not download size or memory use. The comparison mainly demonstrates that toolkit alone does not determine size.

| Family | Installed applications | Local evidence |
|---|---|---|
| Stock Electron | 1Password (513 MB), Claude (753 MB), Granola (608 MB), MarkText (311 MB), Orca (506 MB), Roughdraft (280 MB), Signal (353 MB), Slack (312 MB), Visual Studio Code (842 MB), Wispr Flow (570 MB) | Each bundle contains `Electron Framework.framework`; nearly all also contain `app.asar`. |
| Customized Chromium/Electron family | ChatGPT (1.4 GB), Codex (1.3 GB) | Both contain `app.asar`, Chromium helpers, and a renamed `Codex Framework.framework` whose version follows Chromium. This is not a stock Electron bundle signature, so “customized Electron/Chromium shell” is the precise local classification. [Electron also lists ChatGPT among Electron products.](https://www.electronjs.org/docs/latest/why-electron) |
| Native Apple frameworks | Hammerspoon (40 MB), IINA (201 MB), Karabiner-Elements (32 MB), Raycast (133 MB), Tailscale (68 MB), Telegram (240 MB), Xcode (4.9 GB), the local Launcher (392 KB) | Their main executables link AppKit, SwiftUI, or Cocoa. This proves framework use, not that every screen or subsystem uses one language. |
| Native Apple + embedded WebView | IINA, Raycast, Search Bar (12 MB), `super.engineering` (133 MB), several Apple applications | Their binaries link AppKit and WebKit. Raycast documents where it uses native views, a WebView, Node, and Rust. |
| Mac Catalyst/UIKit | WhatsApp (613 MB) | The binary links UIKit, SwiftUI, WebKit, and other frameworks through `/System/iOSSupport`, the distinctive Mac Catalyst route. |
| Qt/C++ | Foxit PDF Reader (864 MB), OBS (436 MB), qBittorrent (95 MB) | Foxit and OBS link Qt frameworks. qBittorrent carries Qt configuration/translations and its source identifies it as C++/Qt. OBS also bundles Chromium Embedded Framework for browser sources. |
| Rust + native/WebView, custom | `super.engineering` | The executable contains Rust build paths and links AppKit and WebKit, but has no Electron or Tauri signature. Rust is the runtime language here; it does not by itself identify the UI toolkit. |
| Browser, not Electron | Google Chrome (1.4 GB) | Chrome is Chromium itself. Electron embeds Chromium but adds a Node-powered application process and desktop APIs. |

Useful system examples are also present. TextEdit and Terminal link AppKit; Preview, Calculator, Shortcuts, System Settings, Weather, and iPhone Mirroring link combinations of AppKit and SwiftUI; Notes and Music also link WebKit. Real products routinely mix frameworks.

The reproducible inspection method and its limitations are in [the research record](history/2026-07-26-app-stack-research.md).

## 1. Swift + SwiftUI and AppKit

**Default use:** new Mac-only products, Apple-platform products, menu-bar tools, utilities, and applications whose operating-system behavior is part of the product.

Apple calls SwiftUI the best choice for new applications. SwiftUI and AppKit interoperate in both directions, so a production Mac app often uses SwiftUI for ordinary screens and AppKit for mature or specialized behavior. [SwiftUI guidance](https://developer.apple.com/documentation/technologyoverviews/swiftui) · [AppKit integration](https://developer.apple.com/documentation/SwiftUI/AppKit-integration)

### Installed examples

- **Raycast 1.x:** native Swift/AppKit at its core. Raycast built custom AppKit controls for its keyboard-first interaction and used a WebView for Notes. Its extension API accepts React component trees but reconciles them into native AppKit views rather than displaying HTML. [Raycast v1 architecture](https://www.raycast.com/blog/how-raycast-api-extensions-work)
- **IINA:** a Swift macOS interface around the C-based `mpv` media engine. It supports picture-in-picture, Touch Bar, Force Touch, gestures, browser extensions, and a CLI. [IINA source](https://github.com/iina/iina)
- **Telegram:** a Swift/Cocoa application with native media, capture, audio, and notification integrations.
- **Karabiner-Elements:** native settings and event-viewer applications around privileged keyboard-remapping machinery.
- **Tailscale:** a native menu-bar/settings interface around a largely Go networking core and Apple's Network Extension APIs.
- **Hammerspoon:** an Objective-C/AppKit bridge that exposes macOS automation APIs to Lua. [Hammerspoon source](https://github.com/Hammerspoon/hammerspoon)
- **Xcode, TextEdit, Terminal, Preview, Notes, Shortcuts, and System Settings:** first-party examples of AppKit, SwiftUI, or a mixture.

### What is uniquely easy

- Shipping a real Mac menu bar, settings window, Services integration, Quick Look extension, Share extension, Finder extension, widget, App Intent, or Accessibility implementation using Apple's own types.
- Getting native text input, keyboard navigation, VoiceOver semantics, drag-and-drop edge cases, menus, focus, window restoration, and input-method behavior without recreating them in HTML.
- Using a native popover or panel that can extend outside the content window. A DOM element is clipped by its browser surface; a native window is not.
- Receiving new macOS APIs as Apple ships them, without waiting for a cross-platform framework to expose them.
- Keeping the minimum runtime small. The local `Launcher.app` is 392 KB because AppKit and SwiftUI already ship with macOS.

### What is not actually impossible elsewhere

Electron, Tauri, Qt, and Flutter can call nearly any macOS API through a native module or helper process. The difference is ownership: in Swift/AppKit the platform API is the normal path; elsewhere it becomes a bridge that must be designed, built, signed, and tested separately.

### What becomes hard

- The UI does not run on Windows. A Windows version needs another frontend or a major architectural split.
- SwiftUI still has gaps where AppKit knowledge is required.
- Deep platform work produces the best Mac behavior but the least platform reuse.

**Closest competitors:** Mac Catalyst when an iPad app already exists; native host + WKWebView when the interface is web-shaped; Electron when Windows/Linux support matters.

## 2. Electron + a web stack

**Default use:** substantial cross-platform productivity, communication, AI, and developer tools built by teams already productive in web technology.

Electron supplies a bundled Chromium renderer, a Node-powered main process, native desktop APIs, and a multi-process security model. The renderer can remain browser-like while privileged operations live in the main process, utility processes, or native modules. [Electron process model](https://www.electronjs.org/docs/latest/tutorial/process-model)

### Installed examples

- **Roughdraft:** Electron + React + a separate Node/Express server and CLI. Electron only owns the native window and app lifecycle.
- **Slack:** Electron + React/TypeScript + web-delivered product code. It adds notifications, spell-checking, menus, deep links, login launch, Dock/taskbar badges, and installers around the web app. [Slack architecture](https://slack.engineering/growing-pains-migrating-slacks-desktop-app-to-browserview/)
- **Visual Studio Code:** Electron + TypeScript + separate Node extension hosts, terminal/file services, and other utility processes. VS Code helped add Electron's utility-process API so extensions could retain Node access while the visible renderer became sandboxed. [VS Code process architecture](https://code.visualstudio.com/blogs/2022/11/28/vscode-sandbox)
- **1Password 8:** Electron/web UI on desktop + a Rust core shared with iOS, Android, browser extensions, and server-facing logic. Cryptography, storage, permissions, search, and networking live outside the UI. [1Password architecture](https://1password.com/blog/1password-8-the-story-so-far)
- **Signal:** Electron/TypeScript desktop UI + shared Rust cryptographic libraries.
- **Claude, Granola, MarkText, Orca, and Wispr Flow:** conventional Electron bundles on this Mac.
- **ChatGPT and Codex:** customized Chromium/Electron-family distributions rather than visibly stock Electron packages.

### What is uniquely easy

- Running the same tested Chromium behavior on macOS, Windows, and Linux. CSS, layout, editors, canvas, WebGL, accessibility behavior, and browser APIs do not change because the user's OS WebView changed.
- Reusing an existing React/Vue/Svelte application, component library, design system, test suite, and web engineering team.
- Building DOM-heavy interfaces such as rich-text editors, chat, collaborative documents, dashboards, and developer tools.
- Loading some product code remotely when the security and release model permits it, as Slack historically did.
- Combining the UI with Node's filesystem, process, networking, and package ecosystem.
- Isolating extensions or risky work in dedicated processes, as VS Code does.

### Clear restrictions

- An HTML button never becomes an AppKit or WinUI button. The app can open native dialogs or embed native surfaces, but its DOM remains Chromium-rendered.
- Every distributed app carries its chosen Chromium and Node versions. The app publisher must ship security updates.
- The base cost exists even for one small window: several helper processes, a large bundle, and nontrivial idle memory.
- Signing is still native packaging. Roughdraft's tiny shell crashed because the executable and Electron Framework were signed with different Team IDs.

**Closest competitors:** Tauri or a custom system-WebView host for a smaller package; React Native Desktop for JavaScript driving native UI primitives; separate Swift and C# frontends for maximum platform fidelity.

## 3. Native host + system WebView

**Default use:** a web-shaped product that wants native control at the edges without bundling Chromium.

This family includes Tauri, Windows WebView2 applications, and custom Swift/WKWebView or C#/WebView2 shells.

### Installed and familiar examples

- **Raycast 2.0:** Swift/AppKit host on macOS, C#/.NET/WPF host on Windows, React/TypeScript in WKWebView or WebView2, one Node backend, and a small Rust core. Raycast keeps menus, hotkeys, tray behavior, popovers, and tooltips native while sharing most product UI. [Raycast 2.0 deep dive](https://www.raycast.com/blog/a-technical-deep-dive-into-the-new-raycast)
- **Search Bar:** a small native AppKit shell around WebKit.
- **`super.engineering`:** a Rust executable linking AppKit and WebKit, without Electron's runtime.
- **New Microsoft Teams:** native host + Edge WebView2 + React/TypeScript/Fluent UI. Microsoft moved away from Electron partly to reduce resource use. [Teams architecture](https://techcommunity.microsoft.com/t5/microsoft-teams-blog/microsoft-teams-advantages-of-the-new-architecture/ba-p/3775704)
- **Tauri examples not installed here:** Spacedrive, Yaak, Cap, Screenpipe, and Modrinth App appear in the Tauri project's curated application list. [Tauri application list](https://github.com/tauri-apps/awesome-tauri)

### What is uniquely easy

- Reusing a web interface while avoiding a separately bundled browser engine.
- Keeping native window, menu, notification, permission, and lifecycle code in a small platform host.
- In Tauri, exposing a narrow command surface to a Rust backend rather than giving the page general Node access.
- Producing a very small empty shell. Tauri reports that a minimal application can be under 600 KB because the WebView already belongs to the OS. [Tauri overview](https://tauri.app/start/)

### Clear restrictions

- It cannot guarantee one browser engine everywhere: WKWebView runs on macOS, WebView2 on Windows, and WebKitGTK commonly runs on Linux. Rendering and API availability require a compatibility test matrix.
- A system WebView does not remove runtime memory. Raycast measured roughly 120–200 MB for its populated WebView, 150–200 MB for its Node backend, and about 40 MB for the native host during its 2.0 beta. Those are Raycast measurements, not universal constants.
- Tauri does not include Node. A product depending heavily on Node services may add a sidecar, recreate functionality in Rust, or lose much of the simplicity.

**Closest competitor:** Electron. Choose the WebView family when package/runtime ownership matters more than identical Chromium behavior and Node compatibility.

## 4. C++ + Qt

**Default use:** cross-platform engineering, media, networking, hardware, embedded, and other long-lived desktop products with a C or C++ core.

Qt offers two main UI families: mature Qt Widgets for traditional desktop interfaces and QML/Qt Quick for animated, GPU-oriented interfaces. It supports Windows, macOS, Linux, mobile, embedded systems, and WebAssembly. [Qt UI technologies](https://doc.qt.io/qt-6/topics-ui.html)

### Installed examples

- **qBittorrent:** C++/Qt UI around `libtorrent`. [qBittorrent source](https://github.com/qbittorrent/qBittorrent)
- **OBS Studio:** Qt interface around real-time capture, compositing, encoding, and plugin machinery. Its Browser Source separately embeds CEF so HTML overlays and web services can participate in a native media pipeline. [OBS browser plugin](https://github.com/obsproject/obs-browser)
- **Foxit PDF Reader:** its installed executable links Qt Core, GUI, Widgets, and WebKit.

Other prominent examples include Wireshark and VLC. Wireshark explicitly separates its C protocol/capture backend from its Qt frontend. [Wireshark UI architecture](https://www.wireshark.org/docs/wsdg_html_chunked/ChapterUserInterface.html)

### What is unusually easy

- Sharing a mature C++ core and most UI code across three desktop operating systems.
- Building dense, multi-window, table/tree/tool-panel interfaces.
- Keeping media frames, packet data, hardware buffers, and high-performance algorithms near native C/C++ libraries instead of crossing a JavaScript boundary.
- Embedding native windows inside Qt or Qt windows inside a native application. Qt exposes platform handles and native event filters for the gaps. [Qt platform integration](https://doc.qt.io/qt-6/platform-integration.html)
- Extending the same technology toward embedded devices, where Electron is often inappropriate.

### What becomes hard

- C++ ownership and build systems cost more than web or C# development for most product teams.
- Qt controls can follow platform themes but do not automatically reproduce every AppKit or WinUI behavior.
- Platform-specific integration still needs Objective-C++ or Windows native code.
- Commercial versus LGPL/GPL obligations require an explicit licensing decision.

**Closest competitors:** Flutter/Qt Quick for highly custom rendering; Avalonia for .NET teams; Electron for web-centric products; separate native UIs around a shared C++ core.

## 5. Mac Catalyst

**Default use:** an existing iPad/UIKit app that should also run on macOS.

The installed WhatsApp binary links UIKit and SwiftUI through `/System/iOSSupport`, indicating Mac Catalyst. Catalyst shares an Xcode project and source with iPadOS while allowing selected Mac adaptations such as menus, keyboard shortcuts, toolbars, multiple windows, and printing. [Mac Catalyst](https://developer.apple.com/documentation/uikit/mac-catalyst)

### What is uniquely easy

- Turning an existing iPad application into a Mac application without building an AppKit UI from scratch.
- Sharing UIKit screens, models, resources, and much platform behavior with iPadOS.

### Clear restriction

Catalyst can call only AppKit APIs Apple marks as Catalyst-compatible. It is not a general AppKit application, and it provides no route to Windows. A product that begins on desktop rather than iPad gains little from it.

**Closest competitors:** SwiftUI shared between iOS and macOS; separate AppKit frontend around a shared core.

## 6. Windows-native stacks

These applications are not locally inspectable from this Mac, so the examples below come from Microsoft and project documentation.

### WinUI 3 + Windows App SDK

Microsoft recommends WinUI 3 for new Windows-native applications. It uses XAML with C# or C++ and can access the Windows App SDK's windowing, lifecycle, notifications, widgets, deployment, and other APIs. Examples include Windows 11 File Explorer and Photos, Apple Music/TV/Devices for Windows, and Adobe Fresco. [Windows framework guidance](https://learn.microsoft.com/en-us/windows/apps/get-started/windows-developer-faq)

What is easiest:

- Fluent Design, Windows windowing, notifications, widgets, packaging, and recent Windows APIs.
- Shipping a Windows-first product without a browser runtime.

What is impossible:

- WinUI does not render a Mac application. Cross-platform business logic can be shared, but another UI is required.

### WPF

WPF is the mature XAML/.NET desktop stack. Most of Visual Studio's interface uses it. It remains supported and is often the practical choice for complex existing Windows applications, internal tools, and organizations with mature C# controls and architecture.

WPF has a much larger mature control ecosystem than WinUI; WinUI receives newer Windows design investment. Raycast 2 chose WPF for its thin Windows host because the host primarily owns native windows and WebView2 rather than all product UI.

### Windows Forms

WinForms remains common in private line-of-business software: inventory, factory, medical, accounting, administration, and one-off operator tools. Its strongest capability is not visual sophistication but rapid construction of form- and grid-heavy interfaces with a huge installed .NET knowledge base.

### C++/Win32

Win32 is the underlying desktop API family used directly or beneath other frameworks. Notepad++, 7-Zip, browsers, games, Adobe applications, drivers, and large parts of Windows use C++ and Win32 or custom rendering.

It is the escape hatch for low-level control and compatibility, not the recommended first UI toolkit for a new ordinary application.

## 7. Other credible cross-platform stacks

### Flutter

Flutter compiles Dart and renders its own widget system. It excels when a product wants the same custom visual language and animation behavior across mobile and desktop. Desktop examples include Superlist, Rows, and Rive. [Flutter showcase](https://flutter.dev/showcase)

It makes pixel control and mobile/desktop sharing easier than native stacks. Exact native control behavior, small binary size, and conventional desktop menus/windows require more deliberate work.

**Closest competitors:** React Native when native host views matter; Qt Quick for C++/embedded work; Electron for DOM and web-library reuse.

### React Native for Windows and macOS

React Native runs JavaScript/React logic but mounts native host views rather than a DOM. Microsoft documents the Xbox app, parts of Word/Excel/PowerPoint, Power Apps, and Messenger Desktop as users. [React Native Desktop showcase](https://microsoft.github.io/react-native-windows/resources-showcase/)

It gives React teams native rendering primitives, but its desktop library ecosystem is smaller than React Native mobile or Electron. A web React component cannot simply be copied if it depends on HTML or CSS.

**Closest competitors:** Electron for maximum web reuse; Flutter for one custom UI; separate native frontends for full platform coverage.

### Avalonia

Avalonia is a cross-platform .NET/XAML UI stack. Examples include JetBrains dotMemory/dotTrace, LINQPad, Icons8 Lunacy, and Unity Plastic SCM. LINQPad used Avalonia XPF to bring a 17-year WPF application to Apple Silicon while preserving one codebase. [Avalonia showcase](https://avaloniaui.net/showcase) · [LINQPad case study](https://avaloniaui.net/success/linqpad)

It is most compelling when the codebase and team are already C#/.NET. Electron and Flutter have broader cross-platform product ecosystems; WPF/WinUI have deeper Windows-specific ecosystems.

### JVM and IntelliJ Platform

The IntelliJ Platform is a Java/JVM application platform specifically for IDEs and language-aware tools. IntelliJ IDEA, Android Studio, WebStorm, PyCharm, and the other JetBrains IDEs share its editor, virtual filesystem, project model, debugger, test runner, and plugin system. [IntelliJ Platform](https://www.jetbrains.com/opensource/intellij-platform/)

For a new IDE, those prebuilt semantics can outweigh the JVM's runtime cost. For an ordinary consumer utility, Electron, native UI, or Qt normally has a simpler product fit.

## Capability boundaries

Few features are absolutely impossible in a general-purpose stack because native helpers can be added. These are the cleanest real boundaries:

| Requirement | Stack with the direct path | Boundary elsewhere |
|---|---|---|
| One identical browser engine on Mac, Windows, and Linux | Electron | System-WebView applications cannot control the engine version equally across operating systems. |
| Real AppKit controls and first-day macOS APIs | Swift/AppKit | A DOM or custom-rendered widget is not an AppKit control; a native bridge must be added. |
| Real WinUI controls and first-day Windows APIs | WinUI | Mac-native frameworks cannot ship on Windows; cross-platform frameworks need bindings. |
| Reuse an iPad/UIKit application on Mac | Mac Catalyst | Catalyst cannot target Windows and cannot access all AppKit APIs. |
| Keep a large existing C++ interface/core cross-platform | Qt | Electron can wrap the C++ core, but it introduces a separate UI runtime and bridge. |
| Keep an existing WPF codebase while adding Mac | Avalonia XPF | Electron or Flutter implies rewriting the UI rather than translating the WPF surface. |
| DOM, browser editor libraries, and CSS as the actual UI | Electron or WebView | React Native and native toolkits have no DOM; web components must be rewritten. |
| Small web shell without bundled browser | Tauri/system WebView | Electron always bundles its selected Chromium and Node runtime. |

## How to choose

| Product condition | Start with | Change when |
|---|---|---|
| Mac-only utility whose value is OS integration | SwiftUI + AppKit | Add a WebView for one web-shaped surface; do not replace the entire app automatically. |
| Windows-only product | C# + WinUI 3 | Prefer WPF when an existing control ecosystem or codebase dominates the decision. |
| Mac + Windows product, web team, rich document/chat/dashboard UI | Electron + TypeScript/React | Prototype Tauri only after measuring an unacceptable installer, launch, or memory cost. |
| Mac + Windows web UI, small download matters, modest Node dependency | Tauri | Move toward Electron if WebView differences or Node sidecars erase the advantage. |
| Media, networking, hardware, industrial, or embedded C++ product | Qt | Use native platform shells when platform behavior matters more than shared UI. |
| Existing iPad app going to Mac | Mac Catalyst | Move Mac-specific surfaces to AppKit/SwiftUI when Catalyst's API boundary becomes binding. |
| Existing .NET/WPF product going cross-platform | Avalonia | Use native WinUI when Windows-only integration is the product. |
| Shared mobile and desktop product with highly custom visuals | Flutter | Prefer native or React Native when platform controls and conventions dominate. |
| IDE or language tool | IntelliJ Platform | Choose Electron when web/editor technology and a broad frontend hiring pool matter more than built-in language-tool semantics. |

## What I would learn

Assuming solid TypeScript/React experience:

1. **Electron:** main, renderer, preload, IPC, sandboxing, native modules, Forge, signing, notarization, installers, and updates. Expect 2–5 focused days for the model and one to two weeks to ship a small application properly.
2. **SwiftUI + AppKit:** enough SwiftUI to build ordinary screens, then AppKit windowing, menus, Accessibility, Services, and embedding. Expect one to two weeks for useful SwiftUI and one to three months of projects before AppKit feels routine.
3. **C# + WinUI/WPF:** learn this when a Windows-specific product exists. C# transfers readily; Windows deployment and UI history are the larger learning surface.
4. **Tauri/Rust:** learn after identifying a concrete Electron cost. A wrapper can be built in days; reliable Rust ownership normally takes months rather than days.
5. **Qt, Flutter, Avalonia, or IntelliJ Platform:** invest only when the product conditions in the table point there.

The decision should follow the product's hardest boundary, not a general framework ranking. Roughdraft is web-shaped, IINA is Mac-and-media-shaped, OBS is cross-platform-C++-and-media-shaped, and Hammerspoon is macOS-automation-shaped. Their stacks follow from those facts.
<!--/ai-->
