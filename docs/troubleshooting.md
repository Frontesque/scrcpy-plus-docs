# Troubleshooting

## No device is listed

- Unlock the phone and confirm USB debugging is enabled.
- Use a USB cable that supports data, then reconnect the phone.
- Wait for the next device refresh; SCRCPY+ checks ADB every five seconds.
- For a wireless connection, follow [Wireless setup](wireless-setup.md) and check that the phone's current address and port are entered.

## Device is unauthorized

Unlock the phone and accept its USB debugging authorization prompt. If no prompt appears, disconnect and reconnect the device and check Android's USB debugging settings.

## ADB is reported missing

Use **Download** on the Home screen to install the latest compatible SCRCPY bundle, which includes ADB. If you configured a custom ADB executable in Settings, verify that the selected file is the correct ADB executable or choose the intended one again.

## SCRCPY does not start

- Confirm the selected device is still connected and selected.
- Check that custom SCRCPY and ADB paths point to valid executables. The two tools should come from compatible installations; the SCRCPY versions page installs them as a pair.
- Remove custom flags temporarily. SCRCPY+ passes them directly to scrcpy, and an unsupported or conflicting flag can prevent a session from starting.
- Check the requirements for the selected scrcpy option. For example, virtual displays require Android 10 or later, and wireless setup requires Android 11 or later.

## Wireless setup does not complete

Check Wireless debugging on the phone. The pairing code and pairing port are temporary, and the connection port is separate; re-read both from Android instead of reusing an old address. The devices also need network connectivity to each other.

## Release list cannot be loaded

The SCRCPY versions page retrieves release information online. Check the network connection and retry. A release marked as unavailable has no matching build for the current platform in the release assets.
