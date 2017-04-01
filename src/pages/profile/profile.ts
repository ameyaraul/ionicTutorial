import { Component } from '@angular/core';
import { ProfileService } from '../../services/ProfileService';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, private profileService:ProfileService) {
    this.mustSee = 2;
    this.art = 3;
    this.history = 2;
    this.museums = 1;
    this.nature = 3;
    this.entertainment = 4;
    var profile = {
      mustSee:this.mustSee,
      art:this.art,
      history:this.history,
      museums:this.museums,
      nature:this.nature,
      entertainment:this.entertainment
    }
    this.profileService.setProfile(profile);
  }
}
