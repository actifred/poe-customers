import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { dbAccesServices } from '../services/dbAcces.services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  private currentID;
  public currentUser;
  constructor(private activatedRoute: ActivatedRoute, private http: dbAccesServices) {
    this.currentUser=null;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.http.getUser( params['ID']).subscribe(
          (resultat: any) => {
          this.currentUser = resultat;
          console.log("currentUser", this.currentUser) ;
          });
      });
  }
  deleteUser(id: number) {
    let errors;
    this.http.deleteUser(id).subscribe(res => {
    errors = res;
    console.log(" error:" + errors)
    });
  }

}
