import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedCity: any;
  selectedCityName: string;
  itinerary: any;
  myIndex: any;
  inFlights: any;
  outFlights: any;

  day: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedCity = navParams.get('city');
    var selectedCityName = this.selectedCity.name;
    this.selectedCityName = selectedCityName;
    this.itinerary = navParams.get('itinerary');
    this.inFlights = this.itinerary.in_flights;
    this.outFlights = this.itinerary.out_flights;
    this.myIndex = navParams.get('index');

    var i = 0;
    for ( i = 0; i < this.itinerary.city_itinerary.length; i++) {
      if (this.selectedCityName == this.itinerary.city_itinerary[i].name){
        this.day = this.itinerary.city_itinerary[i].day;
        break;
      }
    }
    //this.day = "1";
  }
}
