import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth'
import { LoginPage } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  user = {} as User;
  
  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      
      if (result) {
        this.toast.create({
          message: "Account succesvol geregistreerd",
          duration: 3000
        }).present();

        this.navCtrl.push(LoginPage);
      }
    }
    catch (e) {
      this.toast.create({
        message: "Account kon niet worden geregistreerd",
        duration: 3000
      }).present();

      console.error(e);
    }
  }
}
