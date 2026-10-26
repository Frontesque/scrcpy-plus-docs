# Wireless Setup

SCRCPY+ uses ADB's wireless debugging pairing flow. The in-app flow requires Android 11 or later and the phone and computer must be able to reach each other over the network.

## Pair the device

1. On Android, open **Developer options** and enable **Wireless debugging**.
2. Open the Wireless debugging screen's **Pair device with pairing code** prompt. Keep that prompt open so the pairing code and pairing IP address and port remain available.
3. In SCRCPY+, select **Connect Wirelessly**.
4. Enter the pairing code and the pairing IP address and port shown on the phone, then select **Connect**.

When pairing succeeds, SCRCPY+ advances to the connection step. Pairing and connection use separate ports; use the address and port shown by the phone for each step.

## Connect

1. On the phone's Wireless debugging screen, find its current IP address and port.
2. Enter that connection address and port in SCRCPY+ and select **Connect**.
3. When connected, the device appears in the Home screen's device list. SCRCPY+ remembers the last connection address to prefill this field next time.

The **Skip** button bypasses pairing and moves directly to connection. Use it only when the device is already paired and ready for an ADB connection. The **Back** button returns to pairing.

## Disconnect

On the Home screen, select the wireless device and choose **Disconnect** beneath its serial. This disconnects that ADB connection; it does not change the phone's Wireless debugging setting.

If setup does not advance, recheck the pairing code and the current address and port on the phone. The app does not show detailed ADB error output in this flow, so confirm Wireless debugging is enabled and that both devices can communicate on the network.
