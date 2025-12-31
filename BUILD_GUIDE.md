# Build and Upload Guide for ESP32 BarrVerb

This guide explains how to build and upload the BarrVerb project to a Wemos Lolin32 Lite board using PlatformIO in VSCode.

## Hardware Requirements

1.  **Wemos Lolin32 Lite** (ESP32)
2.  **WeAct PCM5102A** (or generic PCM5102A DAC module)
3.  Wires

## Wiring

Connect the PCM5102A to the Lolin32 Lite as follows:

| PCM5102 Pin | Lolin32 Lite Pin | Function |
| :--- | :--- | :--- |
| **VCC** | **5V** (or 3.3V) | Power |
| **GND** | **GND** | Ground |
| **BCK** | **GPIO 26** | Bit Clock |
| **DIN** | **GPIO 22** | Data In |
| **LCK** | **GPIO 25** | Word Clock (LRCK) |
| **SCK** | **GND** | System Clock (Ground to force internal generation) |
| **FMT** | **GND** | I2S Format (Low for I2S) |
| **XMT** | **3.3V** | Mute (High to unmute) |

*Note: On some PCM5102 boards, SCK must be connected to GND to use the internal PLL for generating the system clock from BCK.*

## Software Prerequisites

1.  **Visual Studio Code (VSCode)**: Download and install from [code.visualstudio.com](https://code.visualstudio.com/).
2.  **PlatformIO IDE Extension**:
    *   Open VSCode.
    *   Go to the Extensions view (Ctrl+Shift+X).
    *   Search for "PlatformIO IDE".
    *   Install the extension.

## Opening the Project

1.  Open VSCode.
2.  Click on the **PlatformIO Home** icon (Alien face) in the left sidebar.
3.  Click **Open Project**.
4.  Navigate to the `esp32_barrverb` directory inside this repository.
    *   **Important**: Do not open the root of the repo; open the `esp32_barrverb` folder which contains `platformio.ini`.

## Building the Project

1.  Once the project is open, look at the bottom status bar in VSCode.
2.  Click the **Checkmark** icon (Build) to compile the project.
3.  Alternatively, use the **PlatformIO Project Tasks** in the left sidebar: `Lolin32 Lite > General > Build`.

## Uploading

1.  Connect your Lolin32 Lite to your computer via USB.
2.  Click the **Arrow** icon (Upload) in the bottom status bar.
3.  PlatformIO will automatically detect the port and upload the firmware.

## Serial Monitor

1.  To see the output and control the reverb, open the Serial Monitor.
2.  Click the **Plug** icon (Serial Monitor) in the bottom status bar.
3.  Ensure the baud rate is set to **115200**.

### Controls

Send characters via the Serial Monitor to control the device:
*   `+`: Next Program
*   `-`: Previous Program
*   `s`: Change Input Source (Silence -> Impulse -> Sawtooth -> Sine)

The device defaults to an **Impulse** generator so you can hear the reverb tail immediately.
