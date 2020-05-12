import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private myUserService: UserServiceService) { }

  ngOnInit(): void {
  }

  goUsers() {
    return '/users'
  }

  post(user) {
    
    let postUser = {
      "firstname":user.firstname,
      "lastname":user.lastname,
      "email":user.email,
      "Avatar":user.avatar
    }
    this.myUserService.post(postUser)
  }

}
