import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class dbAccesServices {
    constructor(private http: HttpClient) {}
    private url="http://localhost:3000/users/";
    private lastid;
    public  getAllUser(): Observable<any> {
    return this.http.get(this.url);
      }
  
     public deleteUser(id: number): Observable<any> {
       return this.http.delete(this.url+ id);
    }
    public  getUser(id: number): Observable<any> {
      return this.http.get(this.url + id);
    }
    addUser(user: any): Observable<any> {
      return this.http.post(this.url,user)  
    }
  }