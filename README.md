# Falcon Event Scanner
A fast scanner which is able to scan QR codes for reservations in events.

The main goal of this scanner is to provide a fast scanner which can check whether a QR code is coupled to a reservation. It uses an offline list of reservation codes to fasten up the checking process. An asynchronous call is made to confirm the registration without delaying the entry process.

## Setup
Make sure you have installed Node.js. Install ionic, cordova and adb with the following command:

```bash
$ npm install -g ionic cordova adb
```

## Running the app locally
Cd into `falcon-event-scanner` and run:

```bash
$ ionic serve -l
```

## Running the app on your Android device
Connect your device and use the `adb devices` command to check whether your device is connected. Then, cd into `falcon-event-scanner` and run:

```bash
$ ionic cordova run android
```

## Credits
[The icon](https://www.iconfinder.com/icons/87458/code_iphone_qr_icon) is created by [Design Contest](http://www.designcontest.com/) and is released under the '[Attribution 3.0 Unported (CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/)' license.