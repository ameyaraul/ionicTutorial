import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  mustSee:any;
  art:any;
  history:any;
  museums:any;
  nature:any;
  entertainment:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mustSee = 2;
    this.art = 3;
    this.history = 2;
    this.museums = 1;
    this.nature = 3;
    this.entertainment = 4;
  }
}
