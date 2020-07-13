import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { environment } from '../../environments/environment'
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private  readonly baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient, private loginService: LoginService) { }

  get(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}/curso`)
  }

  edit(curso: Curso): Observable<Curso>{
    return this.http.patch<Curso>(`${this.baseUrl}/curso/${curso._id}`, curso,  {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'auth': this.loginService.usuario.token })
    })
  }

  novo(curso: Curso): Observable<Curso>{
    curso._id = undefined
    return this.http.post<Curso>(`${this.baseUrl}/curso`, curso,  {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'auth': this.loginService.usuario.token })
    })
  }
  delete(curso: Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${this.baseUrl}/curso/${curso._id}`,  {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'auth': this.loginService.usuario.token })
    })
  }
}
