import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Experiencia } from '../models/experiencia';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {


  private readonly baseUrl: string = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  get(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.baseUrl}/experiencia`)
  }
}
