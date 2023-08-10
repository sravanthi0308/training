import { Component } from "@angular/core";
import { EnrollService } from "../Service.enroll";

@Component({
   selector: 'app-server',
   templateUrl: './server.component.html'
})
export class ServerComponent {
serverId = 10;
serverStatus = 'offline';
show = false
name = "ram";
public game = "red";
// String name= 'sravanthi';
data = [
  {
    name:'apple',
    color:'red'
  },

  {
    name:'mango',
    color:'yellow'
  }
]

onClick(){
  console.log('hello'



  )

}
//service

onEnroll(){
  //creating a instance
  const enrollService = new EnrollService();
 enrollService.OnEnrollClicked();
}



getServerStatus(){
  return this.serverStatus;
}
}
