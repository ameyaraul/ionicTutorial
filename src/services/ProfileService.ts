import { AppModule } from './app.module';

export class ProfileService {
  private profile: any;

  getProfile(): any {
    return this.profile;
  }

  setProfile(profile:any) {
    this.profile = profile;
  }
}

