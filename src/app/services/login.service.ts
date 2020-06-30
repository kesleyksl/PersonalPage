import { Injectable } from '@angular/core';
import{environment} from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly baseUrl: string = environment.baseUrl
  public usuario:Usuario;
  constructor(private http: HttpClient) { }

  login(login: Login): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.baseUrl}/usuario/auth`, login)
  }
}
