import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
	destinations: any;

  constructor(public http: Http) {

  	this.http.get('http://localhost:8000/tourdetails/destinations').map(res => res.json()).subscribe(data => {
        this.destinations = data;
        console.log(this.destinations);
    });
    
  }
}
