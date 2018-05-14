import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.toast.create({
          message: `Welkom ${user.email} :)`,
          duration: 3000
        }).present();

        // Navigate to the homepage and set is as root, so the back button won't be visible.
        this.navCtrl.setRoot(TabsPage);
      }
    }
    catch (e) {
      this.toast.create({
        message: "Kan niet inloggen. Probeer opnieuw.",
        duration: 3000
      }).present();

      console.error(e);
    }
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }  
}
