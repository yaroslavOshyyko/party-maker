import { AngularFireAuth } from 'angularfire2/auth';
import { DatabaseService } from '../../shared/serivces/database.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @ViewChild('main') public main;
  @ViewChild('message') public message;
  @Input() eventId: string;
  public messages;

  constructor(private dbService: DatabaseService, private auth: AngularFireAuth, private params: NavParams) { }

  ngOnInit() {
      if(this.params.get('id')){
        this.eventId = this.params.get('id');;
      }
      this.dbService.getList(`chats/${this.eventId}`, {
        orderByChild: 'timestamp'
      }).subscribe( messages => {
        messages = messages.map( message => {
          message.sendAt = new Date(message.timestamp).getHours() + ':' + ("0" + new Date(message.timestamp).getMinutes()).substr(-2) + ':' + ("0" + new Date(message.timestamp).getSeconds()).substr(-2);
          message.uid === this.auth.auth.currentUser.uid ? message.owner = true : message.owner = false;
          return message;
        });
        this.messages = messages;
      });
  }

  ngAfterViewInit() {
    this.main['nativeElement'].scrollTop = this.main['nativeElement'].scrollHeight;
  }

  sendMessage(message) {
    this.message['nativeElement'].value = '';
    this.dbService.pushDataToList(`chats/${this.eventId}`, {
      userData: this.auth.auth.currentUser.providerData[0],
      uid: this.auth.auth.currentUser.uid,
      message: message,
      timestamp: Date.now()
    }).then(() => {
      this.main['nativeElement'].scrollTop = this.main['nativeElement'].scrollHeight;
    })
  }


}
