import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Usuario } from '../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl: string = environment.baseUrl;
  private user$: BehaviorSubject<Usuario> = new BehaviorSubject<Usuario>(null);
  private userLoaded: boolean = false
  constructor(private http: HttpClient, private loginService: LoginService) { }

  get(): Observable<Usuario> {

    if (!this.userLoaded) {

      this.http.get<Usuario[]>(this.baseUrl + '/usuario')
        .subscribe(
          (users) => {
            this.user$.next(users[0]);
            this.userLoaded = true;
            return this.user$.asObservable();
          }
        )
        
    }


    return this.user$.asObservable();

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
