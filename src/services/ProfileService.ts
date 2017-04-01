import { AppModule } from './app.module';

export class ProfileService {
  private profile: any;

  constructor() {
  	this.profile = {
  		mustSee:2,
		art:3,
		history:2,
		museums:1,
		nature:3,
		entertainment:4
  	}
  }

  getProfile(): any {
    return this.profile;
  }

  setProfile(profile:any) {
    this.profile = profile;
  }
}

