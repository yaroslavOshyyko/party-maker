import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseService } from '../../shared/serivces/database.service';
import {StorageService} from "../../shared/serivces/storage.service";
import {NavController} from 'ionic-angular';
import {EventComponent} from '../../components/event/event.component';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
  event:any = {};
  categories = [];
  placeOnMapMode = false;
  public img: any;
  public file: File | null;
  public smallFile: any;
  public isLoading = false;

  constructor(
      private auth: AngularFireAuth,
      private db: DatabaseService,
      private storage: StorageService,
      private nav: NavController
  ) {
    db.getList('categories').first().subscribe(list => {
      this.categories = list.map(item => item.$value);
    });
  }

  categoryChange(val) {
    this.event.category = val;
  }


  minifiedImage(obj : Object): void {
    console.log(obj);
    if (obj['width'] === 250) {
      this.img = obj['base64'];
      this.file = obj['blob'];
    } else {
      this.smallFile = obj['blob'];
    }
  }

  getFile($event): void {
    const fList = $event['srcElement']['files'];
    this.file = fList.length > 0 ? fList[0] : null;
    console.log(this.file);
  }

  onPlaceOnMap () {
    this.placeOnMapMode = true;

  }

  onPlaceSave () {
    this.placeOnMapMode = false;
  }

  onSave () {
    this.isLoading = true;
    this.event.userId = this.auth.auth.currentUser.uid;
    this.db.pushDataToList('events', this.event).then(snapshot => {
        const key = snapshot.key;
        this.nav.push(EventComponent, {id: key});
    });
    this.event = {};
  }

  loadImg(event): void {
    event.target.style.opacity = 1;
  }
}
