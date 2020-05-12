import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
import { dbAccesServices } from '../services/dbAcces.services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userlist = [];
  constructor(private http: dbAccesServices) { }

  ngOnInit(): void {
    this.http.getAllUser().subscribe(
      (resultat: any) => {
      this.userlist = resultat;
        console.log("resultat", resultat);
      })
  }
  deleteUser(id: number) {
    let errors;
    this.http.deleteUser(id).subscribe(res => {
      errors = res;
      this.ngOnInit();
      console.log(" error:" + errors)
    });
    
  }

  getliens(valeur: number) {
    return `/detail/${valeur}`
  }
}
