@echo off
REM Fix "PlatformConstants could not be found" / Bridgeless red screen
REM Run this from the DAYANAN folder (project root)

echo.
echo === Step 1: Uninstall old app from emulator ===
if defined ANDROID_HOME (
  "%ANDROID_HOME%\platform-tools\adb.exe" uninstall com.dayanan 2>nul
  if %ERRORLEVEL% equ 0 (echo Uninstalled com.dayanan) else (echo App was not installed or adb failed. Manually uninstall DAYANAN from the emulator.)
) else (
  echo ANDROID_HOME not set. Manually uninstall DAYANAN from the emulator: long-press app icon ^> Uninstall
  echo Then press any key to continue...
  pause >nul
)

echo.
echo === Step 2: Clean Android build ===
cd android
call gradlew.bat clean
cd ..

echo.
echo === Step 3: Build and install fresh app (this will take a few minutes) ===
call npx react-native run-android --reset-cache

echo.
echo If you still see the red screen, make sure you uninstalled DAYANAN from the emulator before running this script.
pause
