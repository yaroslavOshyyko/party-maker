import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FacebookAppService} from "./serivces/facebook.service";
import { DatabaseService } from "./serivces/database.service";
import { AuthService } from "./serivces/auth.service";
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    providers: [
        DatabaseService,
        FacebookAppService,
        AuthService,
        AngularFireDatabase
    ],
    bootstrap: []
})
export class SharedModule {}