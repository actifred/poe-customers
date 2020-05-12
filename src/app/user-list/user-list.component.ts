import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../services/user-manager.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users = [];
  constructor(private userManager: UserManagerService) { }
    
  ngOnInit(): void {
    }
    
    public loadUsers() {
      this.userManager.getUsers(25)
      .subscribe( 
        res => {
          this.users = res;
        },
      erreur => {
        console.log('erreur get', erreur);
      },
      () => {
        console.log('requête finie');
      });
    }
    
}
