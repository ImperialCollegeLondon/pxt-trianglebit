# microbit_BLE_HID

TODO:
- [x] Create barebone MakeCode extension
- [ ] Read on HID protocol, try to see how it fits into MakeCode (HID API)
- [ ] Familiarize with similar github page
- [ ] Read on HID over GATT


Notes:
1. Keypresses checked at a certain rate (polling rate)
2. HID keyboard format packet will be sent for every key pressed
3. For every key release, a packet with zeroes are sent
4. Holding the key does not send any packets to conserve energy


========== HID ==========

