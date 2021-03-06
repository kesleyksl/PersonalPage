import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'
import { UserRepos } from '../models/user-repos';
import { HttpClient } from '@angular/common/http';
import { Repositorios } from '../models/repositorios';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ReposService {
  private readonly baseUrl: string = environment.gitUrl;
  private repoLoaded: boolean = false;
  private userLoaded: boolean = false;
  private reposSubject$: BehaviorSubject<Repositorios[]> = new BehaviorSubject<Repositorios[]>(null);
  private userRepos$: BehaviorSubject<UserRepos> = new BehaviorSubject<UserRepos>(null)
  constructor(private http: HttpClient) {

  }

  getUser(login: string): Observable<UserRepos> {

    if(!this.userLoaded){
      this.http.get<UserRepos>(`${this.baseUrl}/users/${login}`).subscribe(
        (user)=>{
          this.userRepos$.next(user);
          this.userLoaded = true;
          console.log(user)
          return this.userRepos$.asObservable();
        }
      )
    }
    return this.userRepos$.asObservable();

  }


  getRepos(login: string): Observable<Repositorios[]> {

    if (!this.repoLoaded) {

      this.http.get<Repositorios[]>(`${this.baseUrl}/users/${login}/repos`)
        .pipe(
          tap((repositorios) => {
            repositorios.forEach((repositorio) => {
              repositorio.day_update = this.calculaData(repositorio)
              repositorio.updated_at = new Date(repositorio.updated_at).toISOString();
            })
          })
        )
        .subscribe(
          (repos) => {
            this.reposSubject$.next(repos);
            this.repoLoaded = true;
            return this.reposSubject$.asObservable();
          }
        )


    }

    return this.reposSubject$.asObservable();
  }
  private calculaData(repositorio: Repositorios): number {
    let data = new Date(repositorio.updated_at)

    let hoje = new Date();
    let diferenca = Math.abs(hoje.getTime() - data.getTime());
    let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
    return dias;
  }
}
