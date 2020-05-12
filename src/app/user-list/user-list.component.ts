import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  public users = [];


  private unsubscribe$ = new Subject<any>();

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService
          .getUsers()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(res => this.users = res);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    // this.userSub.unsubscribe();
    // this.deleteSub.unsubscribe();
  }

  removeUser(userid) {
    this.userService.deleteUser(userid)
      .pipe(take(1))
      .subscribe(
        () => {
          console.log('removal of user ' + userid + ' successful');
          this.users = this.users.filter(user => user.id !== userid);
        },
        err => console.log('Erreur de suppression', err)
      );
  }

}
