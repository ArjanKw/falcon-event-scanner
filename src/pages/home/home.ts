import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { AngularFireAuth } from 'angularfire2/auth'
import { AppDisplayService } from '../../app/shared/app-display/app-display.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private qrScanner: QRScanner,
    private appDisplay: AppDisplayService,
    public navCtrl: NavController) {
    this.startScanning();
  }

  ionViewWillLoad() {
    // this.afAuth.authState.subscribe(data => {
    //   console.log(data);

    //   if (data && data.email && data.uid) {
        
    //   } else {
    //     this.toast.create({
    //       message: `Kon geen authenticatiebron vinden.`,
    //       duration: 3000,
    //     }).present();
    //   }
    // })
  }

  /// Start scanning for QR codes.
  public startScanning() {
    // Request the permission if it wasn't done already.
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) { // camera permission was granted
        

        // show camera preview
        this.qrScanner.show();
        this.appDisplay.setBackgroundColor('transparent');

        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((code: string) => {
          alert('Scanned the following code: ' + code);

          scanSub.unsubscribe();
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
