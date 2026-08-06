# Desktop and mobile stack research record

## Scope

- Classify representative applications installed in `/Applications` and `~/Applications`.
- Distinguish direct bundle evidence from public documentation and inference.
- Compare common macOS, Windows, iOS, and Android stacks by the capabilities they make easier or harder.
- Save enough method to rerun the local inventory after applications update.

Research date: 2026-07-26.

## Local method

1. Enumerated `.app` bundles in `/Applications`, `~/Applications`, and `/System/Applications`.
2. Read `CFBundleExecutable`, `CFBundleIdentifier`, and version fields from each `Info.plist`.
3. Measured uncompressed bundle footprint with `du -sh`.
4. Checked bundle markers:
   - `Electron Framework.framework` and `app.asar`
   - `Chromium Embedded Framework.framework`
   - `FlutterMacOS.framework`
   - Qt frameworks, `qt.conf`, and Qt translations
   - React Native candidates such as `Hermes.framework` or `main.jsbundle`
5. Used `otool -L` on each main executable to identify AppKit, SwiftUI, UIKit through `/System/iOSSupport`, WebKit, Qt, Electron, and CEF linkage.
6. Used `strings` narrowly when a compiled Rust executable had no named framework marker.
7. Checked primary sources for application architecture and framework capabilities. Local evidence takes precedence when the installed version differs from a public description.

The reusable command is [inventory-macos-app-stacks.sh](inventory-macos-app-stacks.sh).

## Classification rules

- **Electron:** direct Electron framework linkage. `app.asar` alone is supporting rather than conclusive evidence.
- **Customized Chromium/Electron family:** ASAR application plus Chromium-style framework/helpers, but the vendor renamed or substantially repackaged the runtime.
- **Native Apple:** direct AppKit, SwiftUI, Cocoa, or UIKit linkage. This does not prove that every subsystem is Swift or that every view is native.
- **Mac Catalyst:** UIKit and related frameworks loaded from `/System/iOSSupport`.
- **System-WebView hybrid:** native executable plus WebKit linkage. A WebView may serve one feature rather than the entire interface.
- **Qt:** direct Qt linkage or, for a statically packaged build, Qt configuration/resources corroborated by the application's source.
- **Rust:** Rust source/build strings show the implementation language, not the UI architecture. Rust applications may use AppKit bindings, WebKit, Tauri, Qt, Flutter, or custom renderers.

## Important limitations

- Dynamic linkage identifies included machinery, not how much of the product uses it.
- Statically linked libraries may not appear as named dependencies.
- A framework can exist for one secondary feature. OBS is primarily a Qt application but bundles CEF for Browser Source; Raycast 1.x is primarily AppKit but uses a WebView for Notes.
- Bundle size includes assets, architectures, models, and optional components. It is not download size, resident memory, or a controlled framework benchmark.
- ChatGPT and Codex contain ASAR code and a vendor-renamed Chromium framework. Their local classification is intentionally more qualified than applications carrying stock `Electron Framework.framework`.
- No phone application inventory was available. Mobile examples were selected only when maintainers published code, architecture notes, or case studies.

## Representative local findings

| Evidence | Applications |
|---|---|
| `Electron Framework.framework` | 1Password, Claude, Granola, MarkText, Orca, Roughdraft, Signal, Slack, Visual Studio Code, Wispr Flow |
| ASAR + renamed Chromium framework | ChatGPT, Codex |
| AppKit/SwiftUI/Cocoa | Hammerspoon, IINA, Karabiner-Elements, Raycast, Tailscale, Telegram, Xcode, Launcher, many Apple system apps |
| UIKit through `/System/iOSSupport` | WhatsApp |
| Qt | Foxit PDF Reader, OBS, qBittorrent |
| CEF | OBS |
| Rust source paths + AppKit/WebKit | `super.engineering` |

## Primary-source strategy

- Framework behavior came from Apple, Google/Android, Microsoft, Electron, Tauri, Qt, Flutter, React Native, Expo, Kotlin, Capacitor, Unity, Avalonia, and JetBrains documentation.
- Application architecture came from maintainers' engineering publications or official source repositories: Raycast, Slack, VS Code, 1Password, Signal, IINA, qBittorrent, OBS, Discord, Shopify, Cash App/Kotlin, and framework-maintained production showcases.
- Vendor showcases were treated as evidence that a named product uses some amount of the framework, not proof that its entire codebase uses it.

## Outputs

- [Desktop application stacks](../desktop.md)
- [Mobile application stacks](../mobile.md)
