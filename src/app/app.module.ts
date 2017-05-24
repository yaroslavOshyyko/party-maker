import { LoginComponent } from './../pages/login/login.component';
import { AppStateComponent } from './../pages/app-state/app-state.component';
import { LogoComponent } from './../pages/logo/logo.component';
import { FacebookService } from 'ng2-facebook-sdk';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileInfoComponent } from './../pages/profile-info/profile-info.component';
import { ProfileComponent } from './../pages/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { EventsMapPage } from '../pages/events-map/events-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule, AgmMap, AgmMarker, AgmCircle } from "@agm/core";
import { AngularFireModule } from "angularfire2";

const config = {
  apiKey: "AIzaSyB8ZSdRKa-a93cJL3QfUldbD_OifHMC24U",
  authDomain: "partymaker-8826f.firebaseapp.com",
  databaseURL: "https://partymaker-8826f.firebaseio.com",
  projectId: "partymaker-8826f",
  storageBucket: "partymaker-8826f.appspot.com",
  messagingSenderId: "830538018323"
};

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    EventsMapPage,
    ListPage,
    ProfileComponent,
    ProfileInfoComponent,
    LogoComponent,
    AppStateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1S_k3L8rHB30x74jllJZ4rGDG2V8dMGI'
    }),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    EventsMapPage,
    ListPage,
    ProfileComponent,
    ProfileInfoComponent,
    LogoComponent,
    AppStateComponent,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    FacebookService
  ],
  exports: [
    AgmMap,
    AgmMarker,
    AgmCircle
  ]
})
export class AppModule {}
