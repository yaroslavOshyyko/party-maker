import { EventsListComponent } from './../events-list/events-list.component';
import { SightsComponent } from './../sights/sights.component';
import { ProfileComponent } from './../profile/profile.component';
import { Component, ViewChild, OnInit } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { EventsMapPage } from '../events-map/events-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService} from '../../shared/serivces/auth.service';
import {NavController} from 'ionic-angular';
import {LoginComponent} from '../login/login.component';


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
    public splashScreen: SplashScreen,
    private authService: AuthService,
    private navController: NavController
  ) {

    // set our app's pages
    this.pages = [
      { title: 'Events', component: EventsListComponent },
      { title: 'Events map', component: EventsMapPage },
      { title: 'My profile', component: ProfileComponent },
      { title: 'Sights', component: SightsComponent }
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

  onLogout () {
    this.authService.logout()
        .first()
        .subscribe(() => this.navController.push(LoginComponent));
  }
}
