import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private  readonly baseUrl: string = 'http://localhost:3333'
  constructor(private http: HttpClient) { }

  get(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}/curso`)
  }
}
