import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import APIS from 'src/app/globals';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(credentials): Observable<any> {
    return this.http.post<any>(APIS.api_login, credentials);
  }
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  logOut() {
    localStorage.removeItem('token');
  }
  regitre(credentials): Observable<any> {
    return  this.http.post(APIS.api_registre , credentials );
    // return this.http.post(APIS.api_registre,  credentials1,  image1 );
  }
}
