import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  // private readonly baseUrl: string = 'http://localhost:3333'
  private readonly baseUrl: string = 'https://kesley-personal-backend.herokuapp.com'
  
  constructor(private http: HttpClient) { }

  get(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.baseUrl}/experiencia`)
  }
}
