import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';

import { NavService } from 'src/app/services/nav.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public cursos: Observable<Curso[]>

  private subject$: Subject<any> = new Subject()
  public onAdd: boolean = false
  // public cursos: Curso[];
  public novoCurso: Curso = {
    nome: '',
    instituicao: '',
    status: '',
    tipo_curso: '',
    _id: '',
    ano_conclusao: '',
    mes_conclusao: ''
  }
  constructor(public cursoService: CursoService, private navService: NavService, public loginService: LoginService) {
    navService.selectedOption = 'school'
  }

  ngOnInit(): void {
    this.cursos = this.cursoService.get();
    

  }

  ngOndestroy() {
    this.subject$.next();
  }

  novo() {
    this.onAdd = true
  }

  cancelar() {
    this.onAdd = false
  }


  adicionarCurso(curso: Curso) {

    this.onAdd = false
  }
}
