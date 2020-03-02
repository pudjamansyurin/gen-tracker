# GEN-Tracker

- GEN Server & GEN Client should be executed from same machine (the server).

  Or change the **socket.address** in **GEN-Client/src/components/js/config.js**
- Use **fake generator** feature if you don't have the IoT Device ready

## GEN-Tracker Client

![gen-tracker-server](gen-tracker-2020-02-05_10.51.37.gif)

- Use socket.io-client *(for bi-directional communication with GEN-Server)*.

  Parse HEX string to readable data format.
- Run: **quasar dev**

## Todo Progress

- [x] Decrease the number of LED Button control
- [x] Use semi-permanent localStorage for VueJS app
- [x] Save history for every reported data
- [x] Handle connection for multiple IoT devices
- [x] Separate VueJS app into multiple components for better code structure
- [ ] Use Laravel web-socket & Vue for web-apps demo
- [x] Backend should response ACK on every un-corrupted REPORT & RESPONSE
