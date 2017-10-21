# Falcon Event Scanner
A fast scanner which is able to scan QR codes for reservations in events.

The main goal of this scanner is to provide a fast scanner which can check whether a QR code is coupled to a reservation. It uses an offline list of reservation codes to fasten up the checking process. An asynchronous call is made to confirm the registration without delaying the entry process.