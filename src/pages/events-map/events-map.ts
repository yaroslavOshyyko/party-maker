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
  lat = 50.45466;
  lng = 30.5238;
  events = [];

  constructor(private db: DatabaseService, private navController: NavController,
              private fb: FacebookAppService) {
    this.db.getList('events')
        .subscribe(events => {
            this.events = events;
            this.fb.searchEvents({
                q:'Kyiv',
                type: 'event'
            }, 20).subscribe(
                data => this.events = this.events.concat(data.map(event => {
                    if (event.place && event.place.location) {
                        event.longtitude = event.place.location.longitude;
                        event.latitude = event.place.location.latitude;
                        event.$key = event.id;
                    }
                    return event;
                })),
                err => console.error(err),
                () => console.log('done', this.events)
            );
        });
  }

  goToEvent (event) {
    this.navController.push(EventComponent, {id: event.$key});
  }
}
