import { Component,OnInit } from '@angular/core';
import { EnrollService } from '../Service.enroll';

@Component({
  // selector: 'app-servers', it is selector
  selector: '[app-servers]',// it is attribute
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';

  constructor(){
    setTimeout(() => {}, 2000);
  }
ngOnInit() {

}
onCreateServer(){
  this.serverCreationStatus = 'server was created' + this.serverName;
}
onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}
onEnroll(){
  //creating a instance for service class
  const enrollService = new EnrollService();
 enrollService.OnEnrollClicked();
}
}
