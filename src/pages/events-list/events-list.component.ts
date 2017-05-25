import { EventComponent } from './../../components/event/event.component';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import {DatabaseService} from "../../shared/serivces/database.service";

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  public events: Array<Object>;
  constructor(private db: DatabaseService, private navController: NavController) {
    this.db.getList('events').first().subscribe(d => this.events = d);
  }

  loadImg($event) {
    $event.currentTarget.style.opacity = 1;
  }

  toEvent(event) {
    this.navController.push(EventComponent, {id: event.$key});
  }

}
