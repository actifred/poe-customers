import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'; 
import { UserModel } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUsers() {
    return this.httpClient.get<UserModel[]>(environment.apiUrl + '/users');
  }

  public getUserById(id) {
    return this.httpClient.get<UserModel>(environment.apiUrl + `/users/${id}`);
  }

}
