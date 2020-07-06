import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Usuario } from '../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient, private loginService: LoginService) { }

  get(): Observable<Usuario[]> {


    return this.http.get<Usuario[]>(this.baseUrl + '/usuario');


  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.baseUrl}/usuario/${usuario._id}`, usuario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'auth': this.loginService.usuario.token
      })
    })
  }

}
