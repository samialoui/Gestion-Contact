import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Users} from '../model/users.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl + '/login';
  constructor(private httpClient: HttpClient) { }
  public login(user: Users): Observable<any> {
    return this.httpClient.post(this.url, user);
  }
}
