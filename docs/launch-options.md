# Launch Options

After selecting a device, the Home screen displays its SCRCPY launch configuration. Options are converted into arguments for the installed scrcpy executable. The exact options available can depend on the scrcpy version and Android device.

## Basic options

- **Turn off phone screen**: switch off the physical device screen while mirroring.
- **Mute audio**: disable audio forwarding.
- **Keep phone awake**: prevent the device from sleeping during the session.
- **View only**: disable mouse and keyboard control of the device.
- **Hide on-screen keyboard**: use scrcpy's UHID keyboard mode so input behaves like a physical keyboard.

## Display settings

Expand **Display Settings** to configure:

- **Custom window name**: set a title for the scrcpy window.
- **Video bitrate**: choose 1 to 32 Mbps. The default is 8 Mbps; SCRCPY+ only adds a bitrate argument when you change it.
- **Record screen**: choose an MP4 or MKV output file. Recording starts with the scrcpy session.
- **Lock screen rotation**: prevent rotation of the displayed device screen.
- **No video**: disable video; scrcpy can still stream audio if audio is enabled and supported.
- **Custom crop**: enter width, height, and X/Y offsets. SCRCPY+ applies the crop only when all four values are non-negative whole numbers.
- **Custom display ID**: target a display by its numeric ID.
- **Virtual display**: create a separate virtual display on Android 10 or later. Its optional size uses scrcpy's format, for example `1920x1080/420`. When enabled, it takes precedence over the custom display ID.

## Advanced options

Expand **Advanced** for additional scrcpy switches:

- **Disable computer screensaver**
- **Use phone as physical input** (OTG mode)
- **Forward all mouse clicks**
- **Turn off screen on close**
- **Always on top**
- **Prefer text input** or **Raw key events** for keyboard behavior
- **Disable key repeat**
- **Show touches**

The **Custom Flags** field accepts additional scrcpy arguments. Separate arguments with spaces; put an argument containing spaces in single or double quotes. These flags are passed through to scrcpy, so use flags supported by the version you have installed. A flag that conflicts with another selected option may cause scrcpy not to start.

## Remembering options

Open **Settings** and enable **Remember SCRCPY config** to restore the launch options the next time SCRCPY+ opens. With this setting disabled, the saved launch configuration is removed.
