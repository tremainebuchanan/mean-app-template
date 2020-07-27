import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl = 'http://localhost:3000/';

constructor(private http: HttpClient) { }

authenticate(user: any){
  return this.http.post(this.baseUrl + 'users/auth', user)
  .pipe(map((response: any) => {
    const user = response;
    if(user){
      sessionStorage.setItem('token', user.token);
    }
   })
  )}
}
