import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: Curso

  @Output() cursoAtualizado = new EventEmitter()

  public onEdit: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }
  edit(){
    this.onEdit = true
  }
  openDialog(){

  }
  atualiza(curso: Curso){
    this.curso = curso
    this.onEdit = false
    this.cursoAtualizado.emit(curso)
  }
  cancel(){
    this.onEdit = false;
  }
}
