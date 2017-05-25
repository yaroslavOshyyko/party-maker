import { WikiArticleComponent } from './../wiki-article/wiki-article.component';
import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {PassDataService} from "../../shared/serivces/pass-data.service";

@Component({
  selector: 'app-sights',
  templateUrl: './sights.component.html'
})
export class SightsComponent implements OnInit {
  lat = 50.45466;
  lng = 30.5238;
  styles = [];
  private events: Array<Object>;
  constructor(
      private http: Http,
      private navController: NavController,
      private passD: PassDataService
  ) { }

  ngOnInit() {
        this.http.get('http://en.wikipedia.org/w/api.php?action=query&format=json&prop=coordinates%7Cpageimages%7Cpageterms%7Ccategories&generator=geosearch&colimit=50&piprop=thumbnail&pithumbsize=144&pilimit=50&wbptterms=description&clcategories=&ggscoord=50.44728800%7C30.42298000&ggsradius=10000&ggslimit=50&origin=*')
            .map(data => data.json().query.pages)
            .map(pages => Object.keys(pages).map(k => pages[k]))
            .map(sights => sights.map(sight => {
                const {lat, lon} = sight.coordinates[0];
                // img: sight.thumbnail.source
                return Object.assign(sight, {
                    index: sight.index,
                    title: sight.title,
                    latitude: lat,
                    longtitude: lon,
                    image: sight.thumbnail ? sight.thumbnail.source : '',
                    description: sight.terms ? sight.terms.description : ''
                })
            }))
            .subscribe(data => this.events = data);
  }

    goToEvent (event) {
      console.log(event);
        this.passD.subject.next(event);
        this.navController.push(WikiArticleComponent, {id: event.pageid});
    }


}
