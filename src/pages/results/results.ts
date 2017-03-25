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

  	this.itinerary = {"city_itinerary":[{"name":"Chicago, IL","s_month":1.0,"s_day":10.0,"s_hour":9.0,"s_minute":45.0,"e_month":1.0,"e_day":11.0,"e_hour":15.0,"e_minute":35.0},{"name":"New York, NY","s_month":1,"s_day":10,"s_hour":11.0,"s_minute":55.0,"e_month":1.0,"e_day":11.0,"e_hour":13.0,"day":1,"arrived":"yes","departed":"no"},{"name":"New York, NY","s_month":1,"s_day":11,"s_hour":11.0,"s_minute":55.0,"e_month":1.0,"e_day":11.0,"e_hour":13.0,"day":2,"arrived":"no","departed":"yes"}],"attraction_itinerary":[{"city":"New York, NY","attractions":[{"name":"Rockefeller Center","s_month":1.0,"s_day":10.0,"s_hour":12.0,"s_minute":40.0,"e_month":1.0,"e_day":10.0,"e_hour":14.0,"e_minute":3.0},{"name":"Brooklyn Bridge","s_month":1.0,"s_day":10.0,"s_hour":14.0,"s_minute":48.0,"e_month":1.0,"e_day":10.0,"e_hour":16.0,"e_minute":3.0},{"name":"Empire State Building","s_month":1.0,"s_day":10.0,"s_hour":16.0,"s_minute":48.0,"e_month":1.0,"e_day":10.0,"e_hour":18.0,"e_minute":12.0},{"name":"Madame Tussauds","s_month":1.0,"s_day":10.0,"s_hour":18.0,"s_minute":57.0,"e_month":1.0,"e_day":10.0,"e_hour":20.0}]},{"city":"New York, NY","attractions":[{"name":"Statue of Liberty","s_month":1.0,"s_day":11.0,"s_hour":9.0,"e_month":1.0,"e_day":11.0,"e_hour":10.0,"e_minute":23.0},{"name":"Central Park","s_month":1.0,"s_day":11.0,"s_hour":11.0,"s_minute":8.0,"e_month":1.0,"e_day":11.0,"e_hour":12.0,"e_minute":15.0}]}],"hotels":{"New York, NY":"Marriot Time's Square"},"in_flights":{"Chicago, IL":"AA5703","New York, NY":"AA1922"},"out_flights":{"Chicago, IL":"AA1922","New York, NY":"AA5703"},"total_expenses":715,"hotel_expenses":100,"flight_expenses":500,"attraction_expenses":115};
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
