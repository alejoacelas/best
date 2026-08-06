# Mobile application stacks: iOS and Android

This guide compares the common iOS and Android stacks through specific production applications, the capabilities each makes unusually easy, and the nearest alternatives.

Unlike the desktop guide, this is not based on a phone inventory: no trustworthy list of applications installed on the user's phone was available from this Mac. The examples below are linked to maintainers' source repositories, engineering accounts, or framework case studies.

## The short answer

The native defaults are:

- **iOS:** Swift + SwiftUI, with UIKit for mature or specialized behavior.
- **Android:** Kotlin + Jetpack Compose, with the older View system for existing applications and remaining gaps.

For one iOS-and-Android team:

- **React Native + Expo** is the shortest transition for a React/TypeScript developer.
- **Flutter** is strongest when the same custom visual interface should render everywhere.
- **Kotlin Multiplatform** is strongest when business logic should be shared without surrendering native UI.
- **Capacitor** is strongest when the product is already a good responsive web application.
- **Unity** is the default category leader for cross-platform 2D/3D games, not ordinary application screens.

## A mobile stack is more than its UI framework

```text
mobile product
├── UI: SwiftUI, Compose, React Native, Flutter, WebView, Unity, …
├── shared/core logic: Swift, Kotlin, TypeScript, Dart, Rust, C++, …
├── platform surfaces: widgets, notifications, camera, background work, …
└── distribution: Xcode/Gradle builds, signing, stores, staged releases
```

All stacks ultimately enter Apple's or Google's native SDKs. Cross-platform frameworks change how much code reaches those SDKs through an abstraction or bridge; they do not bypass mobile sandboxing, entitlements, background limits, or store review.

## 1. Native iOS: SwiftUI + UIKit

Apple calls SwiftUI the best choice for new applications. UIKit remains the mature imperative UI framework underneath a vast existing codebase, and both can live in one app. SwiftUI is also the required or preferred route for some newer surfaces such as widgets. [SwiftUI guidance](https://developer.apple.com/documentation/technologyoverviews/swiftui) · [SwiftUI app extensions](https://developer.apple.com/documentation/swiftui/app-extensions)

### Production examples

- **1Password 8 for iOS:** SwiftUI frontend + shared Rust core. 1Password chose native mobile frontends for platform fit, while putting cryptography, storage, permissions, search, and networking in Rust. Its lock screen illustrates using SwiftUI for a complex adaptive production surface. [architecture](https://1password.com/blog/1password-8-the-story-so-far) · [SwiftUI lock screen](https://1password.com/blog/lock-screen-swiftui-ios-app)
- **Signal iOS:** predominantly Swift UI/application code + shared Rust `libsignal` cryptographic machinery. Signal's organization identifies the iOS repository as Swift. [Signal repositories](https://github.com/signalapp)
- **Firefox iOS:** a public Swift iOS codebase around Apple's required browser surfaces and Mozilla services. [Firefox iOS source](https://github.com/mozilla-mobile/firefox-ios)
- **Wikipedia iOS:** open-source native iOS application. [Wikipedia iOS source](https://github.com/wikimedia/wikipedia-ios)
- **Pocket Casts and Simplenote:** public Swift iOS applications maintained by Automattic. [Automattic repositories](https://github.com/orgs/Automattic/repositories)

Many large iOS apps are mixtures of Objective-C, UIKit, Swift, and increasingly SwiftUI rather than clean rewrites.

### What is uniquely easy

- Shipping new Apple surfaces as designed: widgets, Live Activities, App Intents, Siri/Shortcuts actions, Share extensions, notification extensions, Watch apps, and system controls.
- Matching iOS text input, accessibility, navigation, sheets, gestures, keyboard behavior, and platform conventions with the fewest translation layers.
- Adopting a new iOS API immediately rather than waiting for a cross-platform binding.
- Profiling with Instruments and debugging the exact native view and lifecycle model.

### What is not impossible elsewhere

React Native, Flutter, Capacitor, and Kotlin Multiplatform applications can include Swift modules and iOS extension targets. The difference is that the team must maintain both the cross-platform layer and the native seam. An application's widget may be SwiftUI even when its main interface is React Native.

### What becomes hard

- The UI cannot run on Android.
- Supporting several Apple OS versions requires availability checks and fallbacks.
- SwiftUI occasionally requires dropping into UIKit for control, performance, or APIs not represented cleanly.

**Closest competitors:** React Native for a React team; Kotlin Multiplatform with SwiftUI when only logic should be shared; Flutter for one custom UI.

## 2. Native Android: Kotlin + Jetpack Compose and Views

Google strongly recommends Kotlin and Jetpack Compose for new Android UI. Existing applications often mix Compose with XML layouts, Activities, Fragments, and the View system. [Android architecture recommendations](https://developer.android.com/topic/architecture/recommendations) · [Compose](https://developer.android.com/compose)

### Production examples

- **Signal Android:** predominantly Kotlin application code + shared Rust `libsignal`. [Signal Android source](https://github.com/signalapp/Signal-Android)
- **1Password 8 for Android:** native Android View frontend + the same Rust core used on iOS and desktop. The team selected Views because Compose lacked required features when development began. [1Password architecture](https://1password.com/blog/1password-8-the-story-so-far)
- **Firefox for Android:** Kotlin Android UI/application layers around Mozilla's browser engine and services. [Firefox source](https://github.com/mozilla-firefox/firefox)
- Google documents Compose adoption by **Airbnb, Lyft, Reddit, Disney+ Hotstar, Dropbox, SoundCloud, Booking.com, Bumble, Plex, and others**. “Uses Compose” may describe gradual feature adoption rather than an entire rewrite. [Compose production examples](https://developer.android.com/compose)

### What is uniquely easy

- Direct access to Android's component model: Activities, Services, broadcast receivers, content providers, intents, WorkManager, foreground services, app widgets, and notifications.
- Adapting to Android-specific form factors: foldables, tablets, ChromeOS, Wear OS, TV, Auto, and XR.
- Material 3, dynamic color, predictive navigation, and new Android APIs without waiting for another framework.
- Handling the broad Android device/API matrix with Jetpack's compatibility libraries.

### What becomes hard

- The UI cannot run on iOS.
- Device, vendor, window-size, and OS-version diversity creates a larger test matrix than iOS.
- Existing Android projects often contain Java, XML Views, Fragments, and Compose simultaneously.

**Closest competitors:** React Native or Flutter for one iOS/Android team; Kotlin Multiplatform when Android Kotlin logic should move to iOS without replacing either UI.

## 3. React Native + Expo

React Native executes React application logic with the Hermes JavaScript engine and mounts a native host-view tree rather than HTML. Its current architecture uses a shared C++ renderer and JSI for direct JavaScript/native interfaces. Missing capabilities can be implemented as Swift, Kotlin, Objective-C, Java, or C++ native modules and components. [React Native architecture](https://reactnative.dev/architecture/landing-page) · [native platform APIs](https://reactnative.dev/docs/next/native-platform)

Expo is the common application framework and toolchain on top: routing, native modules, project generation, cloud or local builds, signing, store submission, previews, and allowed JavaScript updates. It does not prevent adding third-party or custom native code. [Expo workflow](https://docs.expo.dev/workflow/overview/) · [distribution](https://docs.expo.dev/distribution/introduction/)

### Production examples

- **Discord iOS and Android:** React Native on both mobile platforms. Discord originally used it only on iOS, then rebuilt Android in React Native to consolidate feature work. Its engineering accounts show both the leverage and the performance work required for large lists, gestures, startup, and low-end Android devices. [iOS performance](https://discord.com/blog/how-discord-achieves-native-ios-performance-with-react-native) · [Android migration](https://discord.com/blog/android-react-native-framework-update) · [2025 performance work](https://discord.com/blog/supercharging-discord-mobile-our-journey-to-a-faster-app)
- **Shopify Mobile and Shopify POS:** hundreds of screens, extensive native modules, weekly releases, and a continuing migration from native code to React Native's current architecture. [Shopify migration](https://shopify.engineering/migrating-our-largest-mobile-app-to-react-native) · [new architecture](https://shopify.engineering/react-native-new-architecture)
- **Facebook:** React Native's new architecture is used at scale inside Meta's products rather than necessarily constituting every screen.
- **Bluesky, Expensify, and Kraken:** cited by React Native as production users of the new architecture. [React Native new architecture](https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here)

### What is uniquely easy

- Transferring React, TypeScript, state-management, linting, and much product logic from a web team.
- Sharing most feature code between iOS and Android while retaining native host views and native modules.
- Letting a feature team own a vertical slice on both mobile platforms.
- Using Expo to build, sign, submit, preview, and update JavaScript without every developer manually operating both store toolchains.

### Clear restrictions

- React Native has no browser DOM. A React web component using `div`, CSS, browser layout, or a DOM library does not run unchanged.
- “Cross-platform” still includes native projects. Payments, widgets, share extensions, background execution, advanced camera/audio, and unusual SDKs often require Swift/Kotlin work.
- JavaScript bundle size and initialization affect startup. Discord once measured roughly 1.5 seconds to load its 15 MB bundle on an iPhone X; modern Hermes and architecture changes improve the machinery but do not make application work free.
- Cross-platform components can drift from platform conventions unless designers and engineers preserve Android- and iOS-specific behavior deliberately.

**Closest competitors:** Flutter for one custom-rendered UI; Kotlin Multiplatform for shared logic/native UI; Capacitor for actual DOM reuse.

## 4. Flutter

Flutter compiles Dart code and owns its widget/rendering pipeline. It is not a WebView and does not turn Dart widgets into UIKit or Android View controls. Native APIs remain available through plugins and Swift/Kotlin platform channels. [Flutter architecture](https://docs.flutter.dev/resources/architectural-overview)

### Production examples

- **Google Pay:** Flutter replaced separate Android and iOS implementations in a relaunch; Google's case study reports 35% fewer lines of code and 70% less engineering effort. [Google Pay case study](https://flutter.dev/showcase/google-pay)
- **eBay Motors:** 98.3% shared code in the cited implementation, one weekly release across both stores, and one mobile team. [eBay Motors case study](https://flutter.dev/showcase/ebay)
- **Nubank, Google Earth, Google Ads, Google Classroom, Philips Hue, Toyota, SoFi, and others:** included in Flutter's production showcase. Inclusion does not imply every surface of each product is Flutter. [Flutter showcase](https://flutter.dev/showcase)
- **Rive:** rewrote its animation tool in Flutter to share a highly visual interface across platforms.

### What is uniquely easy

- Rendering the same custom design, layout, animation, and drawing code on iOS and Android.
- Building branded or graphics-rich interfaces that are not supposed to look like stock UIKit or Material controls.
- Sharing UI tests and visual behavior rather than only business logic.
- Using one language and UI team across mobile, desktop, web, and some embedded products.

### Clear restrictions

- A Flutter control is not a UIKit or Android View control. Platform mimicry must track changing conventions.
- New native capabilities require a plugin or platform channel.
- Embedding Flutter into an existing native app and coordinating navigation/lifecycle is possible but adds architectural seams.
- Dart and Flutter's widget ecosystem provide less direct reuse for a TypeScript/React team than React Native or Capacitor.

**Closest competitors:** React Native when native host views and React skills matter; Compose Multiplatform for Kotlin teams; Unity for game-like 2D/3D content.

## 5. Kotlin Multiplatform and Compose Multiplatform

Kotlin Multiplatform is primarily a code-sharing system, not one mandatory UI. A team can share networking, persistence, validation, and domain logic while retaining SwiftUI on iOS and Compose on Android. Compose Multiplatform optionally shares the UI too. [Kotlin Multiplatform overview](https://kotlinlang.org/multiplatform/)

### Production examples

- **Cash App:** native iOS and Android UIs with selected Kotlin Multiplatform business logic. Cash App explicitly preferred “shared business, native UI” and adopted KMP incrementally behind feature flags. [Cash App case study](https://kotlinlang.org/case-studies/cash-app/)
- **Duolingo, Quizlet, Memrise, H&M, Bolt, Careem, 9GAG, and Google Workspace:** documented adopters of shared Kotlin in portions of their products. The percentage and layer shared differ significantly. [Kotlin case studies](https://kotlinlang.org/docs/multiplatform/case-studies.html)
- **Physics Wallah:** shares both logic and some UI through Compose Multiplatform, including one of its large features.

### What is uniquely easy

- Sharing correctness-sensitive business rules while letting each platform use its normal UI, navigation, accessibility, and extension model.
- Incrementally moving one library or feature rather than rewriting either app.
- Letting Android/Kotlin, server/Kotlin, and iOS engineers collaborate on typed shared logic.
- Choosing later whether the UI should remain native or move selectively to Compose Multiplatform.

### Clear restrictions

- Native UIs mean two UI implementations and two sets of UI tests.
- Shared Kotlin introduces Gradle and Kotlin/Native into the iOS build, including interop and debugging considerations.
- Sharing the entire UI with Compose changes the tradeoff toward Flutter: more reuse, less direct UIKit ownership.

**Closest competitors:** shared Rust or C++ core with native UIs; React Native for one JavaScript UI; Flutter for maximum shared UI.

## 6. Capacitor/Ionic and WebView applications

Capacitor packages a real HTML/CSS/JavaScript application inside the system WebView and exposes native device features through plugins written in Swift, Java/Kotlin, and JavaScript. Unlike React Native, the UI remains a DOM. [Capacitor documentation](https://capacitorjs.com/docs)

### Production examples

- **BBC Children's Games:** one web-first codebase distributed as iOS, Android, and a PWA through Capacitor. [BBC case study](https://ionic.io/resources/case-studies/bbc-games)
- **Blue Cross Blue Shield of Michigan** and enterprise field/service applications appear in Ionic's customer accounts.
- Many internal forms, portals, event, commerce, and content applications use this family without publishing their implementation.

### What is uniquely easy

- Taking an existing responsive web application and preserving its DOM, CSS, web components, browser libraries, and PWA target.
- Shipping web, iOS, and Android from one interface implementation.
- Letting web developers own most screens while native developers add narrow plugins.
- Delivering content/form/dashboard applications whose interaction model already fits a WebView.

### Clear restrictions

- Scrolling, text input, accessibility, navigation transitions, and gesture-heavy interfaces retain WebView behavior unless substantial native work is added.
- A complex camera, audio, background, Bluetooth, health, or platform-extension product quickly accumulates native plugins.
- Web execution and rendering are a poor default for high-frame-rate 3D games or deeply native interaction.

**Closest competitors:** React Native when native host views justify rewriting the UI; Flutter for custom rendering; a PWA when store presence and unavailable native APIs are unnecessary.

## 7. .NET MAUI

.NET MAUI uses C# and XAML or C# UI code to target Android, iOS, Mac Catalyst, Windows, and Tizen from one shared project while retaining access to platform-specific APIs. [MAUI single-project model](https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/single-project)

Microsoft cites its Azure mobile application as a MAUI customer; the wider ecosystem follows Xamarin's long history in enterprise and internal mobile development. [Microsoft application examples](https://learn.microsoft.com/en-us/windows/apps/get-started/windows-developer-faq)

### What is unusually easy

- Keeping mobile applications, business logic, backend models, and tooling in C#/.NET.
- Sharing resources, application lifecycle structure, and UI across mobile and Windows.
- Integrating with Microsoft enterprise stacks and libraries.

### What becomes hard

- The mobile library and hiring ecosystem is smaller than native, React Native, or Flutter.
- Platform-specific UI problems still require knowledge of UIKit and Android.
- Building and signing iOS still ultimately passes through Apple's toolchain.

**Closest competitors:** Avalonia for a broader desktop emphasis; Flutter for a larger custom-UI ecosystem; native UI around a shared .NET library.

## 8. Unity

Unity is a C# game engine with a scene graph, editor, asset pipeline, physics, animation, shaders, audio, and deployment to many platforms.

### Production examples

Unity lists **Marvel Snap, Subway Surfers, Fantasian, Monument Valley 3, Minion Rush, and Sonic Dream Team** among mobile games built with it. [Unity mobile examples](https://unity.com/solutions/mobile)

### What is uniquely easy

- Real-time 2D/3D rendering, physics, animation timelines, particles, shaders, asset import, level editing, and game-oriented profiling.
- Shipping one interactive world across iOS, Android, consoles, and desktop.
- Using a large game-asset and plugin ecosystem.

### Clear restriction

Unity is the wrong default for forms, feeds, settings, accessibility-heavy utilities, or applications expected to behave like ordinary iOS and Android screens. Those are possible, but the engine runtime, input model, UI semantics, build size, and accessibility work oppose the product.

**Closest competitors:** Unreal for higher-end 3D; Godot for an open-source game engine; Flutter for animated application UI rather than a game world.

## 9. Shared native core + platform-native UI

This is an architecture rather than a UI framework:

```text
SwiftUI/UIKit iOS app ─┐
                       ├── Rust or C++ core
Compose/Views Android ─┘
```

Examples:

- **1Password:** SwiftUI on iOS, Android Views on Android, Electron on desktop, shared Rust core everywhere.
- **Signal:** Swift iOS, Kotlin Android, Electron/TypeScript desktop, shared Rust cryptography.
- Browsers and media applications commonly share C++ engines while keeping different platform frontends.

This is the clearest answer when the product contains a difficult, correctness-sensitive engine but platform behavior still matters. It shares less UI than React Native or Flutter and more invariant behavior than two fully separate applications.

## Capability boundaries

| Requirement | Direct choice | Boundary in alternatives |
|---|---|---|
| First-day Apple widgets, Live Activities, App Intents, Watch, and extension targets | SwiftUI/UIKit | Cross-platform apps still add Swift targets and lifecycle integration. |
| First-day Android services, intents, widgets, foldables, Wear, TV, and Auto | Kotlin/Compose | Other stacks depend on bindings or native modules. |
| React/TypeScript team sharing feature UI across iOS and Android | React Native + Expo | Native apps duplicate UI; Capacitor preserves more web code but stays in a WebView. |
| Existing DOM/CSS application shipped to stores | Capacitor | React Native has no DOM; the interface must be rewritten. |
| One pixel-controlled visual system on both platforms | Flutter | Native controls differ by design; React Native inherits more platform variance. |
| Shared domain logic with uncompromised native UIs | Kotlin Multiplatform or shared Rust/C++ | React Native and Flutter normally share the UI too. |
| Cross-platform real-time 2D/3D game | Unity | Ordinary UI frameworks lack the editor, scene, physics, and asset pipeline. |

## How to choose

| Product condition | Start with | Reconsider when |
|---|---|---|
| iOS-only or Apple-first, system integration matters | SwiftUI + UIKit | Add shared core logic if Android becomes real; do not pre-emptively replace the UI. |
| Android-only or Android-first | Kotlin + Compose | Add KMP when iOS needs the same domain logic. |
| iOS + Android, React/TypeScript team, conventional app | React Native + Expo | Move isolated high-performance or platform surfaces into native modules. |
| iOS + Android, distinctive custom visual language | Flutter | Prefer native/RN if platform controls and conventions dominate. |
| Existing high-quality responsive web app | Capacitor | Rewrite critical screens in native/RN if WebView interaction becomes the product limitation. |
| Existing Android/Kotlin product expanding to iOS | Kotlin Multiplatform | Share UI only after shared logic proves valuable. |
| Existing C#/.NET organization | .NET MAUI | Prefer native when platform-specific experience outweighs organizational reuse. |
| Game or real-time interactive 3D world | Unity | Use ordinary app UI around the game only where needed. |
| Security-, media-, or computation-heavy engine plus native UX | Native UIs + Rust/C++ core | Share UI separately only if duplicated frontend work becomes the dominant cost. |

## What I would learn

For someone already comfortable with web applications:

1. **React Native through Expo.** React and TypeScript transfer, while the project teaches mobile navigation, lifecycle, permissions, stores, and native modules. A small application is realistic in 3–7 focused days; a production app with authentication, notifications, deep links, signing, and store release is several weeks.
2. **Swift + SwiftUI.** Learn this next if the devices and personal tools are primarily Apple. Add UIKit as concrete requirements expose SwiftUI's edges.
3. **Kotlin + Jetpack Compose.** Learn this when Android becomes a real target, not as an abstract prerequisite.
4. **Kotlin Multiplatform or a Rust core.** Adopt after building at least one native surface, so the shared/native boundary is an informed decision.
5. **Flutter, Capacitor, MAUI, or Unity** only when the product condition in the table matches.

The main conceptual lesson is the same as desktop: “cross-platform” is not one point. Capacitor shares the actual web UI; React Native shares React logic while mounting native views; Flutter shares a custom renderer; Kotlin Multiplatform can share only logic; Rust/C++ can share only the engine. Choose how much should be identical before choosing the framework.
