import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private  readonly baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }

  get(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}/curso`)
  }
}
