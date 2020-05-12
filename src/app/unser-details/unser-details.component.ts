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

    this.myUserService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data[0])
      this.users.forEach(user => {
        if (user.id == this.currentUserId){
          this.user = user;
        }
      });
      
  })
  }

  goUsers() {
    return '/users'
  }

  delete() {
    this.myUserService.delete(this.currentUserId)
    
  }




}
