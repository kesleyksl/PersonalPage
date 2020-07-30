import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Curso } from '../models/curso';
import { environment } from '../../environments/environment'
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private readonly baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient, private loginService: LoginService) { }
  private cursos$: BehaviorSubject<Curso[]> = new BehaviorSubject<Curso[]>(null);
  public cursoLoaded: boolean = false;
  get(): Observable<Curso[]> {
    if (!this.cursoLoaded) {
      this.http.get<Curso[]>(`${this.baseUrl}/curso`)
        .subscribe(
          (cursos) => {
            this.cursos$.next(cursos);
            this.cursoLoaded = true;
            return this.cursos$.asObservable();
          }
        )
    }
    return this.cursos$.asObservable();
  }

  edit(curso: Curso): Observable<Curso> {
    return this.http.patch<Curso>(`${this.baseUrl}/curso/${curso._id}`, curso, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'auth': this.loginService.usuario.token })

    })
      .pipe(
        tap(
          (c) => {
            let index = this.cursos$.value.findIndex(c => c._id == curso._id)

            if (index >= 0) {
              this.cursos$.value[index] = curso
            }

          }
        )
      )
  }

  novo(curso: Curso): Observable<Curso> {
    curso._id = undefined
    return this.http.post<Curso>(`${this.baseUrl}/curso`, curso, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'auth': this.loginService.usuario.token })
    }) .pipe(
      tap(
        (c) => {
          this.cursos$.value.unshift(c);

        }
      )
    )
  }
  delete(curso: Curso): Observable<Curso> {
    return this.http.delete<Curso>(`${this.baseUrl}/curso/${curso._id}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'auth': this.loginService.usuario.token })
    })
    .pipe(
      tap(
        () => {
          let index = this.cursos$.value.findIndex(c => c._id == curso._id)

          if (index >= 0) {
            this.cursos$.value.splice(index, 1);
          }

        }
      )
    )
  }
}
