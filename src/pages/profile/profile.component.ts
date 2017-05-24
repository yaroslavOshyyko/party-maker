import { ProfileInfoComponent } from './../profile-info/profile-info.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  
  public tab1;

  ngOnInit() {
    this.tab1 = ProfileInfoComponent; 
  }

}
