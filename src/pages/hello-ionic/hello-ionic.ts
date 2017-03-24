import { Component , OnInit} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

@Injectable()
export class HelloIonicPage {
	
    private getTripURL = "http://localhost:8000/tourdetails/gettrip"; 
	data={};
	destinations ='';
	public destination: any;
	public budget: any;
	public departure : any;
    
    public startDate: Date;
	public endDate: Date;
  constructor(public http: Http) {  	
  		this.http.get('http://localhost:8000/tourdetails/destinations').map(res => res.json()).subscribe(data => {
        this.destinations = data;
    	});
    	console.log(this);
  }
  submit() {
  		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(
            this.getTripURL, 
            JSON.stringify({
                    origin:this.departure,
                    destinations:this.destination,
                    from_date:this.startDate, 
                    to_date:this.endDate,
                    budget:this.budget                    
                }),
            {headers:headers}
        ).map(
            (res: Response) => res.json()
        ).subscribe(
            (res) => {
                //this.postResponse = res;
                console.log("VALUE RECEIVED: ",res);
            },
            (x) => {
                /* this function is executed when there's an ERROR */
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
