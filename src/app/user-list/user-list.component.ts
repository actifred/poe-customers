import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userlist=[];
  constructor(private http:HttpClient) { }
    
  ngOnInit(): void {
   
    }
    public loadUsers() {
    this.http.get("http://localhost:3000/users").subscribe(
      (resultat:any)=>{this.userlist=resultat;
      console.log("resultat",resultat);})
    }
    getliens(valeur:number){
        return `/detail/${valeur}`
    }
}
