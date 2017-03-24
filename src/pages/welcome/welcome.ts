import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HelloIonicPage } from '../../pages/hello-ionic/hello-ionic';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }

  startApp() {
  	this.navCtrl.setRoot(HelloIonicPage);
  }
}
