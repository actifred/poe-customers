import { Component, OnInit, Input, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { UserManagerService } from '../services/user-manager.service';

@Component({
  selector: 'app-ligne-liste-customers',
  templateUrl: './ligne-liste-customers.component.html',
  styleUrls: ['./ligne-liste-customers.component.css']
})
export class LigneListeCustomersComponent implements OnInit {
  @Input() public currentUser:any;
  //@Output() supprimeEvent = new EventEmitter();

  constructor(private httpClient:HttpClient, private userManager: UserManagerService) { }

  ngOnInit(): void {}

  public supprimeUser(detailEvenement) {
    console.log('Clic reçu', detailEvenement);
    if (this.currentUser == null) {
      console.log("id NULL !");
      return;
    }
    console.log("appel du delete pour l'utilisateur d'id " + this.currentUser.id);
    this.userManager.supprime(this.currentUser.id).subscribe( 
      res => {
        console.log("pan !");
        this.currentUser = null;
      },
    erreur => {
      console.log('erreur get', erreur);
    },
    () => {
      console.log('requête finie');
    });;
    /*
    this.httpClient.delete('http://localhost:3000/users/' + this.currentUser.id).subscribe( 
      res => {
        console.log("pan !");
        //this.users = res;
      },
    erreur => {
      console.log('erreur get', erreur);
    },
    () => {
      console.log('requête finie');
    });
    //this.supprimeEvent.emit(this.currentUser);
    */
  }

}
