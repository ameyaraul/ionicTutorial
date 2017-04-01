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
    this.mustSee = oldProfile.MustSee;
    this.art = oldProfile.Art;
    this.history = oldProfile.History;
    this.museums = oldProfile.Museum;
    this.nature = oldProfile.Nature;
    this.entertainment = oldProfile.Entertainment;
  }

  updateProfile() {
    var newProfile = {
      MustSee:this.mustSee,
      Art:this.art,
      History:this.history,
      Museum:this.museums,
      Nature:this.nature,
      Entertainment:this.entertainment
    }
    this.profileService.setProfile(newProfile);
  }
}
