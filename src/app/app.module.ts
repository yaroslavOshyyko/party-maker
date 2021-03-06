import { EventsListComponent } from './../pages/events-list/events-list.component';
import { SightsComponent } from './../pages/sights/sights.component';
import { WikiArticleComponent } from './../pages/wiki-article/wiki-article.component';
import { EventChatComponent } from './../components/event-chat/event-chat.component';
import { ParticipatedComponent } from './../pages/participated/participated.component';
import { OrganizedComponent } from './../pages/organized/organized.component';
import { LoginComponent } from './../pages/login/login.component';
import { AppStateComponent } from './../pages/app-state/app-state.component';
import { LogoComponent } from './../pages/logo/logo.component';
import { FacebookService } from 'ng2-facebook-sdk';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfileInfoComponent } from './../pages/profile-info/profile-info.component';
import { ProfileComponent } from './../pages/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation} from '@ionic-native/geolocation';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { EventsMapPage } from '../pages/events-map/events-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule, AgmMap, AgmMarker, AgmCircle } from "@agm/core";
import { AngularFireModule } from "angularfire2";
import { EventComponent } from '../components/event/event.component';
import {EventsInfoComponent} from '../components/events-info/events-info.component';
import {EventParticipantsComponent} from '../components/event-participants/event-participants.component';
import {CreateEventComponent} from '../pages/create-event/create-event.component';
import {PlaceOnMapComponent} from '../components/place-on-map/place-on-map.component';

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
    LoginComponent,
    EventComponent,
    EventsInfoComponent,
    EventParticipantsComponent,
    OrganizedComponent,
    ParticipatedComponent,
    EventChatComponent,
    WikiArticleComponent,
    SightsComponent,
    EventsListComponent,
    CreateEventComponent,
    PlaceOnMapComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1S_k3L8rHB30x74jllJZ4rGDG2V8dMGI'
    }),
    AngularFireModule.initializeApp(config),
    HttpModule
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
    LoginComponent,
    EventComponent,
    EventsInfoComponent,
    EventParticipantsComponent,
    OrganizedComponent,
    ParticipatedComponent,
    EventChatComponent,
    WikiArticleComponent,
    SightsComponent,
    EventsListComponent,
    CreateEventComponent,
    PlaceOnMapComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    FacebookService,
    Geolocation
  ],
  exports: [
    AgmMap,
    AgmMarker,
    AgmCircle,
    PlaceOnMapComponent
  ]
})
export class AppModule {}
