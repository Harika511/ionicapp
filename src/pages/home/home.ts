import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Topic1Page } from '/Users/sathguru/harika/ionic+angular/ionic-sidemenu-starter-master/src/pages/topic1/topic1';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  topic1Page:Topic1Page;
  rootPage: any = 'Topic1Page';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  public search(){
    alert("hi search");
   // this.menu.enable(false);
   // this.navCtrl.setRoot(this.rootPage);
      }

}
