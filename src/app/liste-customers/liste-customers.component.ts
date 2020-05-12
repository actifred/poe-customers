import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../services/user-manager.service';

@Component({
  selector: 'app-liste-customers',
  templateUrl: './liste-customers.component.html',
  styleUrls: ['./liste-customers.component.css']
})
export class ListeCustomersComponent implements OnInit {
  public users = [];
  
  constructor(private userManager: UserManagerService) { }

  ngOnInit(): void {
    console.log("ListeCustomersComponent.ngOnInit");
    this.loadUsers();
  }

  public loadUsers() {
    console.log("load users");
    this.userManager.getUsers()
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
