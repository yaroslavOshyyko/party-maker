import { ProfileComponent } from './../profile/profile.component';
import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { ListPage } from '../list/list';
import { EventsMapPage } from '../events-map/events-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  selector: 'app-state',  
  templateUrl: 'app-state.component.html'
})
export class AppStateComponent implements OnInit{
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = ProfileComponent;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {

    // set our app's pages
    this.pages = [
      { title: 'My First List', component: ListPage },
      { title: 'Events map', component: EventsMapPage },
      { title: 'My profile', component: ProfileComponent}
    ];
  }

  ngOnInit() {
    this.statusBar.styleDefault();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
