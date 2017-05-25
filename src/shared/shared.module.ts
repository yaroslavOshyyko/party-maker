import { PassDataService } from './serivces/pass-data.service';
import { TwitterAuth } from './serivces/authMethods/twitter';
import { GithubAuth } from './serivces/authMethods/github';
import { FacebookAuth } from './serivces/authMethods/facebook';
import { GoogleAuth } from './serivces/authMethods/google';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FacebookAppService} from "./serivces/facebook.service";
import { DatabaseService } from "./serivces/database.service";
import { AuthService } from "./serivces/auth.service";
import { AngularFireDatabase } from 'angularfire2/database';
import {StorageService} from './serivces/storage.service';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    providers: [
        DatabaseService,
        FacebookAppService,
        AuthService,
        GoogleAuth,
        FacebookAuth,
        FacebookAppService,
        GithubAuth,
        TwitterAuth,
        AngularFireDatabase,
        PassDataService,
        StorageService
    ],
    bootstrap: []
})
export class SharedModule {}