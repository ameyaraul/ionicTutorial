import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'results',
  templateUrl: 'results.html'
})
export class ResultsPage {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  itinerary: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //Uncomment for debugging this page
  	//this.itinerary = {"city_itinerary":[{"name":"New York, NY","s_month":5.0,"s_day":5.0,"s_hour":6.0,"e_month":5.0,"e_day":9.0,"e_hour":23.0,"e_minute":59.0},{"name":"Washington, DC","s_month":5,"s_day":5,"s_hour":7.0,"s_minute":10.0,"e_month":5.0,"e_day":6.0,"e_hour":10.0,"day":1,"arrived":"yes","departed":"no"},{"name":"Washington, DC","s_month":5,"s_day":6,"s_hour":7.0,"s_minute":10.0,"e_month":5.0,"e_day":6.0,"e_hour":10.0,"day":2,"arrived":"no","departed":"yes"},{"name":"Chicago, IL","s_month":5,"s_day":6,"s_hour":12.0,"s_minute":8.0,"e_month":5.0,"e_day":7.0,"e_hour":16.0,"e_minute":45.0,"day":3,"arrived":"yes","departed":"no"},{"name":"Chicago, IL","s_month":5,"s_day":7,"s_hour":12.0,"s_minute":8.0,"e_month":5.0,"e_day":7.0,"e_hour":16.0,"e_minute":45.0,"day":4,"arrived":"no","departed":"yes"},{"name":"Miami, FL","s_month":5,"s_day":7,"s_hour":19.0,"s_minute":50.0,"e_month":5.0,"e_day":8.0,"e_hour":20.0,"e_minute":19.0,"day":5,"arrived":"yes","departed":"no"},{"name":"Miami, FL","s_month":5,"s_day":8,"s_hour":19.0,"s_minute":50.0,"e_month":5.0,"e_day":8.0,"e_hour":20.0,"e_minute":19.0,"day":6,"arrived":"no","departed":"yes"},{"name":"Orlando, FL","s_month":5,"s_day":8,"s_hour":21.0,"s_minute":29.0,"e_month":5.0,"e_day":9.0,"e_hour":21.0,"e_minute":37.0,"day":7,"arrived":"yes","departed":"no"},{"name":"Orlando, FL","s_month":5,"s_day":9,"s_hour":21.0,"s_minute":29.0,"e_month":5.0,"e_day":9.0,"e_hour":21.0,"e_minute":37.0,"day":8,"arrived":"no","departed":"yes"}],"attraction_itinerary":[{"city":"Washington, DC","attractions":[{"name":"Lincoln Memorial","s_month":5.0,"s_day":5.0,"s_hour":9.0,"e_month":5.0,"e_day":5.0,"e_hour":11.0,"e_minute":30.0},{"name":"Capitol","s_month":5.0,"s_day":5.0,"s_hour":12.0,"s_minute":15.0,"e_month":5.0,"e_day":5.0,"e_hour":14.0,"e_minute":15.0},{"name":"Washington Monument","s_month":5.0,"s_day":5.0,"s_hour":15.0,"e_month":5.0,"e_day":5.0,"e_hour":16.0,"e_minute":30.0},{"name":"White house","s_month":5.0,"s_day":5.0,"s_hour":17.0,"s_minute":15.0,"e_month":5.0,"e_day":5.0,"e_hour":20.0}]},{"city":"Washington, DC","attractions":[]},{"city":"Chicago, IL","attractions":[{"name":"Sky Deck","s_month":5.0,"s_day":6.0,"s_hour":12.0,"s_minute":53.0,"e_month":5.0,"e_day":6.0,"e_hour":20.0}]},{"city":"Chicago, IL","attractions":[{"name":"Navy Pierre","s_month":5.0,"s_day":7.0,"s_hour":9.0,"e_month":5.0,"e_day":7.0,"e_hour":11.0,"e_minute":15.0},{"name":"Giordanos","s_month":5.0,"s_day":7.0,"s_hour":12.0,"e_month":5.0,"e_day":7.0,"e_hour":14.0,"e_minute":30.0},{"name":"Cloud Gate","s_month":5.0,"s_day":7.0,"s_hour":15.0,"s_minute":15.0,"e_month":5.0,"e_day":7.0,"e_hour":16.0}]},{"city":"Miami, FL","attractions":[]},{"city":"Miami, FL","attractions":[{"name":"Jungle Island","s_month":5.0,"s_day":8.0,"s_hour":9.0,"e_month":5.0,"e_day":8.0,"e_hour":15.0,"e_minute":15.0},{"name":"South Beach","s_month":5.0,"s_day":8.0,"s_hour":16.0,"e_month":5.0,"e_day":8.0,"e_hour":19.0,"e_minute":34.0}]},{"city":"Orlando, FL","attractions":[]},{"city":"Orlando, FL","attractions":[{"name":"Universal Studios","s_month":5.0,"s_day":9.0,"s_hour":8.0,"e_month":5.0,"e_day":9.0,"e_hour":10.0,"e_minute":24.0},{"name":"Disney Land","s_month":5.0,"s_day":9.0,"s_hour":11.0,"s_minute":9.0,"e_month":5.0,"e_day":9.0,"e_hour":13.0,"e_minute":33.0},{"name":"Sea World","s_month":5.0,"s_day":9.0,"s_hour":14.0,"s_minute":18.0,"e_month":5.0,"e_day":9.0,"e_hour":16.0,"e_minute":51.0},{"name":"Islands of Adventure","s_month":5.0,"s_day":9.0,"s_hour":17.0,"s_minute":36.0,"e_month":5.0,"e_day":9.0,"e_hour":20.0}]}],"itineraryOptCost":-18349.861111147406,"hotels":{"Chicago, IL":"The James","Miami, FL":"Provident Doral","Washington, DC":"Kimpton Carlyle","Orlando, FL":"Hilton Buena Vista Palace"},"in_flights":{"Chicago, IL":"AA485","Miami, FL":"AA342","Washington, DC":"AA2115","New York, NY":"AA184","Orlando, FL":"AA113"},"out_flights":{"Chicago, IL":"AA342","Miami, FL":"AA113","Washington, DC":"AA485","New York, NY":"AA2115","Orlando, FL":"AA184"},"total_expenses":2719,"hotel_expenses":779,"flight_expenses":1250,"attraction_expenses":690};
    this.itinerary = navParams.get("itinerary");
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, city, index) {
    this.navCtrl.push(ItemDetailsPage, {
      itinerary: this.itinerary,
      city: city,
      index: index
    });
  }

  startApp() {
  }
}
