import { Component, OnInit, Input, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ligne-liste-customers',
  templateUrl: './ligne-liste-customers.component.html',
  styleUrls: ['./ligne-liste-customers.component.css']
})
export class LigneListeCustomersComponent implements OnInit {
  @Input() public currentUser:any;
  //@Output() supprimeEvent = new EventEmitter();

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {}

  public supprime(detailEvenement) {
    console.log('Clic reçu', detailEvenement);
    console.log("appel du delete pour l'utilisateur d'id " + this.currentUser.id);
    this.httpClient.delete('http://localhost:3000/delete/' + this.currentUser.id);
    //this.supprimeEvent.emit(this.currentUser);
  }

}
