# Connect to Android Emulator

Use this so you (and your prof) can run the app on the Android emulator without issues.

## 1. Prerequisites

- **Android Studio** installed.
- **Android SDK** installed (via Android Studio → SDK Manager).
- **Node.js** (v20+) and project dependencies installed (`npm install`).

## 2. Set environment (so you can connect to the emulator)

- **Windows (PowerShell):**  
  Add to your user environment variables (or set in the same terminal before running commands):

  - `ANDROID_HOME` = `C:\Users\<YourUsername>\AppData\Local\Android\Sdk`  
    (Replace `<YourUsername>` with your Windows username. In Android Studio: **File → Settings → Appearance & Behavior → System Settings → Android SDK** to see the path.)

- Add to **Path**:
  - `%ANDROID_HOME%\platform-tools`  
  (So you can run `adb` and the emulator is detected.)

- **Optional:** Close and reopen the terminal (or restart the PC) after changing env vars.

## 3. Start the emulator

1. Open **Android Studio**.
2. **Tools → Device Manager** (or **AVD Manager**).
3. Create a device if needed (e.g. Pixel 6, API 33 or 34).
4. Click **Run** (play) on the virtual device. Wait until the home screen is fully loaded.

## 4. Run the app on the emulator

From the project root (`DAYANAN`):

```bash
# Start Metro (in one terminal)
npx react-native start

# In another terminal: build and run on the connected emulator
npx react-native run-android
```

- The first time may take a few minutes (build). Later runs are faster.
- If you see “PlatformConstants” or Bridgeless error: **uninstall the DAYANAN app from the emulator**, then run `npx react-native run-android` again (see `ANDROID_REBUILD.txt` if needed).

## 5. If the emulator is not detected

- Confirm the emulator is running and you see its window.
- Run: `%ANDROID_HOME%\platform-tools\adb devices`  
  You should see your emulator (e.g. `emulator-5554 device`).
- If it says “unauthorized”, accept the USB debugging prompt on the emulator.
- If the list is empty, restart the emulator and run `adb devices` again.

## 6. Summary

- Set **ANDROID_HOME** and add **platform-tools** to **Path**.
- Start the **Android emulator** from Android Studio.
- Run **Metro** and **run-android** from the project folder.  
Then you can connect to the Android emulator whenever you (or your prof) need to run the app.
