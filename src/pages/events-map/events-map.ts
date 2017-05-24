import { Component } from '@angular/core';

@Component({
  selector: 'events-map',
  templateUrl: 'events-map.html'
})
export class EventsMapPage {
  lat = 50.45466;
  lng = 30.5238;
  events = [];
  
  constructor() {
    this.events = [{
      name: 'Event1',
      longtitude: 30.5238,
      latitude: 50.45466
    }];
  }
}
