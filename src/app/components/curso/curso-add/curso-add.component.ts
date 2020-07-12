import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';

import { FormBuilder, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrls: ['./curso-add.component.css']
})
export class CursoAddComponent implements OnInit {

  @Input() cursoNovo: Curso;

  @Output() cursoSalvo = new EventEmitter();

  @Output() cancelarEmiter = new EventEmitter();

  @Input() criacao: boolean

  Curso = this.fb.group({
    _id: [''],
    nome: ['', [Validators.required]],
    tipo_curso: ['', [Validators.required]],
    instituicao: ['', [Validators.required]],
    status: ['', [Validators.required]],
    mes_conclusao: [''],
    ano_conclusao: ['']


  });

  public isLoading: boolean = false;
  constructor(private fb: FormBuilder,
              private cursoService: CursoService) { 

  }

  ngOnInit(): void {

    this.Curso.setValue({
      nome: this.cursoNovo.nome || '',
      _id: this.cursoNovo._id,
      tipo_curso: this.cursoNovo.tipo_curso || '',
      instituicao: this.cursoNovo.instituicao || '',
      status: this.cursoNovo.status || 'Cursando',
      mes_conclusao: this.cursoNovo.mes_conclusao || '',
      ano_conclusao: this.cursoNovo.ano_conclusao || ''
    })

  }


  submit() {

    this.isLoading = true;
    if(this.criacao){

    }
    else{

      this.cursoService.edit(this.Curso.value)
      .subscribe(
        (curso)=>{
          this.cursoSalvo.emit(curso);
        }
        ,
        (erro)=>{
          this.isLoading = false;
        }
      )
    }
  }


  cancelar() {

    this.isLoading = false;
    this.cancelarEmiter.emit(false);
  }



}
