import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'events-map',
  templateUrl: 'events-map.html'
})
export class EventsMapPage {
  lat = 50.45466;
  lng = 30.5238;
  events = [];

  constructor(private navController: NavController) {
    this.events = [{
      name: 'Event1',
      longtitude: 30.5238,
      latitude: 50.45466
    }];
  }

  goToEvent (event) {
    //this.navController.push(['/app', 'event', event.$key]);
  }
}
