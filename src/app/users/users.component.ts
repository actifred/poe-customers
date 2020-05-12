import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private myUserService: UserServiceService) { }

  public users:any = [];

  ngOnInit(): void {
    this.myUserService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  goDetail(id) {
    return '/users/' + id
  }

  delete(id:String) {
  //   console.log("j'entre dans delete")
  //   let deleteUser = 'http://localhost:3000/users/'+ id;
  //   this.http.delete(deleteUser)
  //     .subscribe(res =>{
  //     console.log(res)
  //     }
  //   )
  //   console.log(deleteUser)
  console.log("jentre dans le delete avec l'id :" + id)
  this.myUserService.delete(id);
  this.ngOnInit()
     }




}
