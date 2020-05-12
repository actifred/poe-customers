import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userlist = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/users").subscribe(
      (resultat: any) => {
      this.userlist = resultat;
        console.log("resultat", resultat);
      })
  }
  deleteUser(id: number) {
    let url = "http://localhost:3000/users/" + id;
    let error;
    this.http.delete(url).subscribe(res => {
      error = res;
      this.ngOnInit();
    });
    console.log("url :" + url + " error:" + error)
  }

  getliens(valeur: number) {
    return `/detail/${valeur}`
  }
}
