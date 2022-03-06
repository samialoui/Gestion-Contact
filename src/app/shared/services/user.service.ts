import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Users} from '../model/users.model';
import {PasswordRequest} from '../model/password-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.apiUrl + '/users';
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Users[]> {
   /* const token = localStorage.getItem('token');
    const httpHeader = new HttpHeaders().append('Authorization', token + '');
    return this.httpClient.get<Users[]>(this.url, {headers: httpHeader});*/
    return this.httpClient.get<Users[]>(this.url);
  }
  public getById(id: any): Observable<Users> {
    return this.httpClient.get<Users>(this.url + '/' + id);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.url  + '/' + id);
  }
  public add(user: Users): Observable<any> {
    return this.httpClient.post(this.url , user);
  }
  public update(user: Users): Observable<any> {
    return this.httpClient.put(this.url , user);
  }
  public changePassword(password: PasswordRequest): Observable<any> {
    return this.httpClient.patch(this.url , password);
  }
}
