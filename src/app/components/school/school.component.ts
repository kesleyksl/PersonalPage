import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';

import { NavService } from 'src/app/services/nav.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  // public cursos: Observable<Curso[]> = this.cursoService.get();

  private subject$: Subject<any> = new Subject()
  public onAdd: boolean = false
  public cursos: Curso[];
  public novoCurso: Curso = {
    nome: '',
    instituicao: '',
    status: '',
    tipo_curso: '',
    _id: '',
    ano_conclusao: '',
    mes_conclusao:''
  }
  constructor(private cursoService: CursoService, private navService: NavService, public loginService: LoginService) {
    navService.selectedOption = 'school'
   }

  ngOnInit(): void {
    this.cursoService.get()
    .pipe(
      takeUntil(this.subject$)
    )
    .subscribe(
      (cursos)=> this.cursos = cursos
      
    )

  }

  ngOndestroy(){
    this.subject$.next();
  }

 novo(){
   this.onAdd = true
 }

 cancelar(){
   this.onAdd = false
 }

  atualiza(curso: Curso){
    let index = this.cursos.findIndex(c => c._id == curso._id )

    if(index >= 0){
      this.cursos[index] = curso
    }
  }

  deletar(curso: Curso){
    let index = this.cursos.findIndex(c => c._id == curso._id )

if(index >= 0){
  this.cursos.splice(index, 1)
}
  }


  adicionarCurso(curso: Curso){
    this.cursos.unshift(curso);
    this.onAdd = false
  }
}
