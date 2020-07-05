import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Experiencia } from '../models/experiencia';
import {environment} from '../../environments/environment'
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {


  private readonly baseUrl: string = environment.baseUrl
  
  constructor(private http: HttpClient, private loginService: LoginService) { }

  get(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.baseUrl}/experiencia`)
  }

  edit(experiencia: Experiencia): Observable<Experiencia>{
    return this.http.patch<Experiencia>(`${this.baseUrl}/experiencia/${experiencia._id}`, experiencia,  {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'auth': this.loginService.usuario.token })
    })
  }
}
