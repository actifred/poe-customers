import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserServicesService {
  constructor(private httpClient: HttpClient) { }


  private userRet : any = {};

public getUserByUserId(id: string): Observable<any> {
  

    let urlService = 'http://localhost:3000/users/' + id;
    console.log("url", urlService); 
    
    return this.httpClient.get(urlService)
    .pipe(
        tap(resultat => {
          this.userRet = resultat;
          console.log('Le service a stocké en cache la donnée', this.userRet);
      })); 
  }
}


