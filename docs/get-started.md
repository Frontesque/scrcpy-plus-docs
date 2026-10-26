# Get Started

SCRCPY+ is a desktop interface for selecting an Android device, configuring a [scrcpy](https://github.com/Genymobile/scrcpy) session, and launching it. It uses Android Debug Bridge (ADB) to discover and connect to devices; scrcpy handles the screen and input session.

## Before you begin

- Install and open SCRCPY+ for your operating system.
- Enable **USB debugging** on the Android device if you are connecting over USB.
- Have ADB available. If SCRCPY+ reports that ADB is missing, choose **Download** on the Home screen to install the latest compatible SCRCPY bundle, which includes ADB.

For USB connections, connect and unlock the device, then approve the USB debugging prompt shown on the phone. Keep the device connected while using SCRCPY+.

## Start a session

1. Open SCRCPY+ and wait for the device list to refresh. It checks ADB about every five seconds.
2. Select a device by its serial. If only one device is detected, SCRCPY+ selects it automatically. With multiple devices, choose the right serial from the tabs.
3. Review the device information and choose the [launch options](launch-options.md) you need.
4. Select **Start SCRCPY**. The scrcpy window opens separately from the SCRCPY+ control window.

If the list is empty, check the cable and USB debugging state, or use [wireless setup](wireless-setup.md). If the device is marked **Unauthorized**, unlock it and accept the debugging authorization prompt.

## More help

- [Devices and connections](devices-and-connections.md)
- [Launch options](launch-options.md)
- [Wireless setup](wireless-setup.md)
- [Settings and SCRCPY versions](settings-and-versions.md)
- [Troubleshooting](troubleshooting.md)
