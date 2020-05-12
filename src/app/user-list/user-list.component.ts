import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public users = [];

  private userSub: Subscription;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userSub = this.userService.getUsers().subscribe(res => this.users = res);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  removeUser(userid) {
    this.userService.deleteUser(userid).subscribe(() => {
      console.log('removal of user ' + userid + ' successful');
      this.users = this.users.filter(user => user.id !== userid);
    });
  }

}
