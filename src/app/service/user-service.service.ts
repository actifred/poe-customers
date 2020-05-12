import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  private users = [];

  // getAllUsers() {
  //   return this.http
  //     .get('http://localhost:3000/users');
  // }

  public getUsers(){
    return this.http.get<any>('http://localhost:3000/users')
  
  }

  // public getUserById(id){
  //   return this.http.get<any>('http://localhost:3000/users' + id)
  
  // }

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
}
