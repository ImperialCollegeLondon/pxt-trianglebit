#include "mbed.h"
#include "ble/BLE.h"
#include "KeyboardService.h"

namespace trianglebit{

    export function init() : void{
        DigitalOut col9(P0_12, 0);

        DigitalOut waiting_led(P0_13);
        DigitalOut connected_led(P0_15);

        InterruptIn button1(BUTTON_A);
        InterruptIn button2(BUTTON_B);

        #define MICROBIT_PIN_P0                     P0_3
        InterruptIn key1(MICROBIT_PIN_P0);
        // Try to use external signal, rather than button a&b as keys

        BLE ble;
        KeyboardService *kbdServicePtr;

        static const char DEVICE_NAME[] = "micro:bit xx316";
        static const char SHORT_DEVICE_NAME[] = "kbd1";

        char UpArrow = 0x52;
        const char *UpArrowPtr = &UpArrow;
        char DownArrow = 0x51;
        const char *DownArrowPtr = &DownArrow;
    }

    export function onDisconnect(): void{
        HID_DEBUG("disconnected\r\n");
        connected_led = 0;

        ble.gap().startAdvertising(); // restart advertising
    }

    export function onConnect(): void{
        HID_DEBUG("connected\r\n");
        waiting_led = false;
    }

    export function waiting(): void{
        if (!kbdServicePtr->isConnected())
            waiting_led = !waiting_led;
        else
            connected_led = !connected_led;
    }

    export function send_string(c : char) : void{
        if (!kbdServicePtr)
            return;

        if (!kbdServicePtr->isConnected()) {
            HID_DEBUG("we haven't connected yet...");
        } else {
            int len = strlen(c);
            kbdServicePtr->printf(c);
            HID_DEBUG("sending %d chars\r\n", len);
        }
    }
    //%block
    export function main() : void{
        init();
        send_string('j');
    }

    //%block
    export function test() {
        helloworld();
	}
}
