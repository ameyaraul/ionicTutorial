import { AppModule } from './app.module';

export class ProfileService {
  private profile: any;

  constructor() {
  	this.profile = {
  		MustSee:2,
		Art:3,
		History:2,
		Museum:1,
		Nature:3,
		Entertainment:4
  	}
  }

  getProfile(): any {
    return this.profile;
  }

  setProfile(profile:any) {
    this.profile = profile;
  }
}

