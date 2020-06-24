import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import{tap} from 'rxjs/operators'
import { UserRepos } from '../models/user-repos';
import { HttpClient } from '@angular/common/http';
import { Repositorios } from '../models/repositorios';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private readonly baseUrl: string = 'https://api.github.com'
  private repoLoaded: boolean = false;
  private reposSubject$: BehaviorSubject<Repositorios[]> = new BehaviorSubject<Repositorios[]>(null);

  constructor(private http: HttpClient) { 

  }

  getUser(login: string): Observable<UserRepos>{
    
     return this.http.get<UserRepos>(`${this.baseUrl}/users/${login}`)

  }


  getRepos(login: string): Observable<Repositorios[]>{

    return this.http.get<Repositorios[]>(`${this.baseUrl}/users/${login}/repos`)
            .pipe(
              tap((repositorios)=>{
                repositorios.forEach((repositorio)=>{
                  repositorio.day_update = this.calculaData(repositorio)
                  repositorio.updated_at = new Date(repositorio.updated_at).toISOString();
                })
              })
            )
            

  }
  private calculaData(repositorio: Repositorios): number {
    let data = new Date(repositorio.updated_at)
    
    let hoje = new Date(); 
    let diferenca = Math.abs(hoje.getTime() - data.getTime()); 
    let dias =  Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    return dias;
  }
}
