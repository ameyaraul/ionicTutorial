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
    var oldProfile = profileService.getProfile();
    this.mustSee = oldProfile.mustSee;
    this.art = oldProfile.art;
    this.history = oldProfile.history;
    this.museums = oldProfile.museums;
    this.nature = oldProfile.nature;
    this.entertainment = oldProfile.entertainment;
  }

  updateProfile() {
    var newProfile = {
      mustSee:this.mustSee,
      art:this.art,
      history:this.history,
      museums:this.museums,
      nature:this.nature,
      entertainment:this.entertainment
    }
    this.profileService.setProfile(newProfile);
  }
}
