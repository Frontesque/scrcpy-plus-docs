# Devices and Connections

The **Devices** section on the Home screen lists devices reported by ADB. SCRCPY+ refreshes this list every five seconds. A listed device is identified by its ADB serial.

## Select a device

- When one device is detected, SCRCPY+ selects it automatically.
- When more than one device is detected, select the tab showing the serial of the device you want to use.
- Selecting a device loads its model, Android version, API level, build ID, and security patch information.
- If no device is detected, the list shows **No devices detected**. If a device appears but its identifying properties cannot be read, it is labelled **Unauthorized**.

Only the selected device gets a launch configuration. SCRCPY+ passes its serial to scrcpy, so a session targets that device even when several are connected.

## USB connection

1. Enable **Developer options** and **USB debugging** on the Android device.
2. Connect the phone to the computer with a data-capable USB cable and unlock it.
3. Accept the USB debugging authorization prompt on the phone.
4. Wait for the serial to appear in SCRCPY+.

If it remains unauthorized, check the phone for an authorization prompt. Disconnect and reconnect the cable after enabling USB debugging.

## Wireless connection

Choose **Connect Wirelessly** in the Devices section to pair and connect through ADB. The in-app setup supports Android 11 and later. Follow the phone's Wireless debugging screen to enter the pairing code and pairing IP address and port, then enter the connection IP address and port. See [Wireless setup](wireless-setup.md) for the full sequence.

An active wireless device can be disconnected with the **Disconnect** button beneath its serial.
