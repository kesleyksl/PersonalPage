import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Usuario } from '../models/usuario';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient) { }
 
  get(): Observable< Usuario[]> {
    

    return this.http.get<Usuario[]>(this.baseUrl + '/usuario');


  }


}
