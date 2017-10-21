import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private qrScanner: QRScanner) {
    // Request the permission if it wasn't done already.
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {

      if (status.authorized) {
        // camera permission was granted

        // show camera preview
        this.qrScanner.show();

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((code: string) => {
          alert('Scanned the following code: ' + code);

        });
      } else if (status.denied) {
        console.log('denied');
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        console.log('not permanently denied');
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }
}
