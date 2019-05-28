#include "BLE_HID_DEVICE"
#include <iostream>

refresh_rate = 0.1;

static void onDisconnect(const Gap::DisconnectionCallbackParams_t *params)
{
    HID_DEBUG("disconnected\r\n");
    connected_led = 0;

    ble.gap().startAdvertising(); // restart advertising
}

static void onConnect(const Gap::ConnectionCallbackParams_t *params)
{
    HID_DEBUG("connected\r\n");
    waiting_led = false;
}

static void waiting() {
    if (!kbdServicePtr->isConnected())
        waiting_led = !waiting_led;
    else
        connected_led = !connected_led;
}

void send_string(const char * c) {
    if (!kbdServicePtr)
        return;

    if (!kbdServicePtr->isConnected()) {
        HID_DEBUG("we haven't connected yet...");
    } else {
        int len = strlen(c);
        kbdServicePtr->printf(c);
        //HID_DEBUG("sending %d chars\r\n", len);
        uBit.serial.printf("sending %d chars\r\n", len);
    }
}

void send_stuff() {
    send_string("n");
    wait(refresh_rate);

}

void send_more_stuff() {
    send_string("p");
    wait(refresh_rate);

}
