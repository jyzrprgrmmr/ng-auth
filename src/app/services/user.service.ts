import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "http://localhost:3000/api";

  constructor(
    private http: HttpClient
  ) { }

  addUser(body):any{
    return this.http.post(this.apiUrl + '/user', body);
  }
  login(body):any{
    return this.http.post(this.apiUrl + '/user/login', body)
  }
}
