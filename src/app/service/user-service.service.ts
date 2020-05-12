import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface user {
  firstname:String,
  lastname:String,
  email:String,
  Avatar:String
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private users = [];

  public getUsers(){
    return this.http.get<any>('http://localhost:3000/users')
  
  }

  public getUserById(id : string){
    console.log("entré dans getuserbyid")
    let url = "http://localhost:3000/users/"+id
    return this.http.get<any>(url)
  
  }

  delete(id:String) {
    console.log("j'entre dans delete")
    let deleteUser = 'http://localhost:3000/users/'+ id;
    this.http.delete(deleteUser)
      .subscribe(res =>{
      console.log(res)
      }
    )
    console.log(deleteUser)
  }

  post(user:user){
    this.http.post('http://localhost:3000/users', user)
  }
}
