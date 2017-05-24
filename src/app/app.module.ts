import { ProfileComponent } from './../pages/profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { EventsMapPage } from '../pages/events-map/events-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule, AgmMap, AgmMarker, AgmCircle } from "@agm/core";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    EventsMapPage,
    ListPage,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1S_k3L8rHB30x74jllJZ4rGDG2V8dMGI'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    EventsMapPage,
    ListPage,
    ProfileComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [
    AgmMap,
    AgmMarker,
    AgmCircle
  ]
})
export class AppModule {}
