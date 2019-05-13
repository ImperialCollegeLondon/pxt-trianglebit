# microbit_BLE_HID

TODO:
- [ ] ~~Create barebone MakeCode extension~~ Require more information on keyboard and service required.
- [x] Read on HID protocol, try to see how it fits into MakeCode (HID API)
- [ ] Familiarize with similar github page
- [x] Read on HID over GATT

### HID Protocol
[Source](https://wiki.osdev.org/USB_Human_Interface_Devices)
1. Keypresses checked at a certain rate (polling rate)
2. HID keyboard format packet will be sent for every key pressed
3. For every key release, a packet with zeroes are sent
4. Holding the key does not send any packets to conserve energy

#### HID keyboard report packet format
- Report packet up to 8 bytes

| Byte | Description |
| ---- | :---------: |
| 0 | Modifier key status |
| 1 | Reserved field (HID) |
| 2 | Keypress 0 |
| 3 |  Keypress 1 |
| 4 |  Keypress 2 |
| 5 |  Keypress 3 |
| 6 |  Keypress 4 |
| 7 |  Keypress 5 |

#### Auto-Repeat
Auto repeat when key is pressed down has to be done on software (driver software), usually has a delay of 500ms while holding key before auto repeat is triggered. Then is is repeated at a rate of 10 characters per second.




