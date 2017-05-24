import { AppStateComponent } from './../app-state/app-state.component';
import { NavController } from 'ionic-angular';
import { AuthService } from './../../shared/serivces/auth.service';
import { TwitterAuth } from './../../shared/serivces/authMethods';
import { AngularFireAuth } from 'angularfire2/auth';
import { GithubAuth } from './../../shared/serivces/authMethods';
import { FacebookAuth } from './../../shared/serivces/authMethods';
import { GoogleAuth } from './../../shared/serivces/authMethods';
import { VkAuth } from './../../shared/serivces/authMethods';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  // styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isSignedIn: boolean = false;

  public userData;

  constructor(
    private googleAuth: GoogleAuth,
    private facebookAuth: FacebookAuth,
    private githubAuth: GithubAuth,
    private twitterAuth: TwitterAuth,
    private auth: AngularFireAuth,
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.auth.authState.subscribe(data => {
      console.log(data);
      if(data == null) {
        this.isSignedIn = false;
      } else {
        this.isSignedIn = true;
        this.userData = data;
        // this.navCtrl.push(AppStateComponent);
      }
    });
  }

  googleLogin() {
    this.googleAuth.login().then(() => {
      this.navCtrl.push(AppStateComponent);
    });
  }

  facebookLogin(){
    this.facebookAuth.login().then((data) => {
      this.authService.facebookToken = data.credential.accessToken;
      console.log(data);
      localStorage.setItem('facebookToken', this.authService.facebookToken);
      this.navCtrl.push(AppStateComponent);
    });
  }

  githubLogin(){
    this.githubAuth.login().then(() => {
      this.navCtrl.push(AppStateComponent);
    });
  }

  loadImg($event) {
    $event.currentTarget.style.opacity = 1;
  }

}
