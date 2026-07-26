#!/bin/zsh

set -euo pipefail
setopt null_glob

apps=(/Applications/*.app "$HOME"/Applications/*.app)

printf 'app\tversion\tsize\tbundle_id\tmarkers\tlinked_ui\n'

for app in $apps; do
  plist="$app/Contents/Info.plist"
  [[ -f "$plist" ]] || continue

  name="${app:t:r}"
  version=$(/usr/libexec/PlistBuddy -c 'Print :CFBundleShortVersionString' "$plist" 2>/dev/null || true)
  bundle_id=$(/usr/libexec/PlistBuddy -c 'Print :CFBundleIdentifier' "$plist" 2>/dev/null || true)
  executable=$(/usr/libexec/PlistBuddy -c 'Print :CFBundleExecutable' "$plist" 2>/dev/null || true)
  size=$(du -sh "$app" 2>/dev/null | awk '{print $1}')
  markers=()

  [[ -d "$app/Contents/Frameworks/Electron Framework.framework" ]] && markers+=(electron)
  [[ -d "$app/Contents/Frameworks/Chromium Embedded Framework.framework" ]] && markers+=(cef)
  [[ -d "$app/Contents/Frameworks/FlutterMacOS.framework" ]] && markers+=(flutter)
  [[ -e "$app/Contents/Resources/app.asar" ]] && markers+=(asar)
  [[ -e "$app/Contents/Resources/qt.conf" ]] && markers+=(qt-resources)

  if [[ -d "$app/Contents/Frameworks" ]] &&
    find "$app/Contents/Frameworks" -maxdepth 2 \
      \( -iname 'QtCore.framework' -o -iname 'QtWidgets.framework' \) |
      rg -q .; then
    markers+=(qt)
  fi

  if find "$app/Contents" -maxdepth 5 \
    \( -iname 'Hermes.framework' -o -name 'main.jsbundle' \) 2>/dev/null |
    rg -q .; then
    markers+=(react-native-candidate)
  fi

  linked_ui=''
  binary="$app/Contents/MacOS/$executable"
  if [[ -n "$executable" && -f "$binary" ]]; then
    linked_ui=$(
      otool -L "$binary" 2>/dev/null |
        rg -o 'SwiftUI|AppKit|UIKit|WebKit|Qt(Core|Widgets|Gui)?|Electron Framework|Chromium Embedded Framework' |
        sort -u |
        paste -sd, -
    ) || linked_ui=''
  fi

  printf '%s\t%s\t%s\t%s\t%s\t%s\n' \
    "$name" "$version" "$size" "$bundle_id" "${(j:,:)markers}" "$linked_ui"
done
