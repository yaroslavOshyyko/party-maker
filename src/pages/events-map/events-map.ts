import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {EventComponent} from '../../components/event/event.component';
import { DatabaseService } from '../../shared/serivces/database.service';
import {FacebookAppService} from "../../shared/serivces/facebook.service";

@Component({
  selector: 'events-map',
  templateUrl: 'events-map.html'
})
export class EventsMapPage {
  events = [];
  lat = 50.45466;
  lng = 30.5238;
  filteredEvents = [];
  center:any = {};

  options = {
    searchQuery : "",
    category: [
      {
        name: 'Concert',
        value: true
      },
      {
        name: 'Theatre',
        value: true
      },
      {
        name: 'Meeting',
        value: true
      },
    ],
    price: 2,
    radius: 1000
  };

  constructor(private db: DatabaseService, private navController: NavController,
              private fb: FacebookAppService) {
    this.db.getList('categories')
      .subscribe((categories) => {
        this.options.category = categories;
      });
      this.center.latitude = this.lat;
      this.center.longtitude = this.lng;
    this.db.getList('events')
        .subscribe(events => {
            this.events = events;
            this.fb.searchEvents({
                q:'Kyiv',
                type: 'event'
            }, 20).subscribe(
                data => {
                    this.events = this.events.concat(data.map(event => {
                    if (event.place && event.place.location) {
                        event.longtitude = event.place.location.longitude;
                        event.latitude = event.place.location.latitude;
                        event.$key = event.id;
                    }
                    return event;
                }));
                this.filterEvents();
                return this.events;
            },
                err => console.error(err),
                () => console.log('done', this.events)
            );
        });
  }

  goToEvent (event) {
    this.navController.push(EventComponent, {id: event.$key});
  }

  filterEvents () {
    this.filteredEvents = this.events.filter(
      (event) => this.getDistance(this.center.longtitude, event.longtitude,
                this.center.latitude, event.latitude) < this.options.radius);
  }

  onRadiusChange (event) {
    this.options.radius = event;
    this.filterEvents();
  }

  onCenterChange (event) {
    this.center.latitude = event.lat;
    this.center.longtitude = event.lng;
    this.filterEvents();
  }

  getDistance (lon1, lon2, lat1, lat2) {
    const rad = x => x * Math.PI / 180;
    const R = 6378137;
    const dLat = rad(lat2 - lat1);
    const dLong = rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return  R * c;
  }
}
