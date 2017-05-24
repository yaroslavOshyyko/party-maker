import { ParticipatedComponent } from './../participated/participated.component';
import { OrganizedComponent } from './../organized/organized.component';
import { ProfileInfoComponent } from './../profile-info/profile-info.component';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  
  public tab1;

  public tab2;

  public tab3;

  ngOnInit() {
    this.tab1 = ProfileInfoComponent;
    this.tab2 = OrganizedComponent;
    this.tab3 = ParticipatedComponent;
  }

}
