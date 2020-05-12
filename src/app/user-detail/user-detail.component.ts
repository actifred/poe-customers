import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserManagerService } from '../services/user-manager.service';

@Component({
  selector: 'nat-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public currentUserName = '';

  public currentUser = null;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userManager: UserManagerService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.currentUserName = params['userName'];
        this.currentUser = this.userManager.getUserByUserName(this.currentUserName);
      }
    );
  }

  nextUser() {
    const nextUser = this.userManager.getNextUser(this.currentUserName);
    console.log('Next user is', nextUser);
    if (nextUser) {
      this.router.navigate(
        ['detail', nextUser.login.username]);
    } else {
      console.log(`Il n'y a pas d'autre utilisateur`);
    }
    // aller vers la route /detail/(nextUser.login.username) 
  }
}
