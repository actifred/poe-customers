import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-unser-details',
  templateUrl: './unser-details.component.html',
  styleUrls: ['./unser-details.component.css']
})
export class UnserDetailsComponent implements OnInit {

  constructor(private myUserService: UserServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  public users:any = [];
  public currentUserId = '';
  public user;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.currentUserId = params['id'];
        
      }
    );

    this.myUserService.getUserById(this.currentUserId).subscribe(data => {
      this.user = data
    })
  }

  goUsers() {
    return '/users'
  }

  delete() {
    this.myUserService.delete(this.currentUserId)

  }




}
