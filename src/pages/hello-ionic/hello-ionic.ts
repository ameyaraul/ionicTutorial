import { Component} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Injectable }     from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../../pages/profile/profile';
import { ResultsPage } from '../../pages/results/results';
import { ProfileService } from '../../services/ProfileService';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

@Injectable()
export class HelloIonicPage {
	
    private getTripURL = "http://localhost:8000/tourdetails/gettripjson"; 
    private getBestTripURL = "http://localhost:8000/tourdetails/getbesttripjson"; 
	data={};
	destinations ='';
	public destination: any;
	public budget: any;
	public departure : any;
    public daysFree: any;
    
    public startDate: Date;
	public endDate: Date;
    public showLoading: boolean; 
    public surpriseMe: boolean;
  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public profileService:ProfileService) {  
        this.showLoading = false;
  		this.http.get('http://localhost:8000/tourdetails/destinations').map(res => res.json()).subscribe(data => {
        this.destinations = data;
        console.log(this.destinations);
    	});
        this.surpriseMe = true;

  }
  submit() {
        this.showLoading = true;
        var url = "";
        var destinations = [];
        if(this.surpriseMe){
            url = this.getBestTripURL;
            destinations = [this.departure];
        }
        else{
            url = this.getTripURL;
            destinations = this.destination;
        }

  		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(
            url, 
            JSON.stringify({
                    origin:this.departure,
                    destinations:destinations,
                    from_date:this.startDate, 
                    to_date:this.endDate,
                    budget:this.budget,
                    profile:this.profileService.getProfile(),
                    daysFree:this.daysFree               
                }),
            {headers:headers}
        ).map(
            (res: Response) => res.json()
        ).subscribe(
            (res) => {
                //this.postResponse = res;
                this.navCtrl.push(ResultsPage, 
                {
                    itinerary: res
                });
                this.showLoading = false;
                console.log("VALUE RECEIVED: ",res);
            },
            (x) => {
                /* this function is executed when there's an ERROR */
                this.showLoading = false;
                console.log("ERROR: "+x);
            },
            () => {
                /* this function is executed when the observable ends (completes) its stream */
                console.log("Completed");
            }
        );
  }
  
}
export class Data {
	constructor(
    	public destinations: any,
		public budget: any,
		public departure : any,
    	public destination: any,
    	public startDate: Date, 
		public endDate: Date
        ){}
}
