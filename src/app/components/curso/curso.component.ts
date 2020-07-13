import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { MatDialog } from '@angular/material/dialog';
import { DialogCursoComponent } from './dialog-curso/dialog-curso.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CursoService } from 'src/app/services/curso.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: Curso

  @Output() cursoAtualizado = new EventEmitter()

  @Output() cursoDeletado = new EventEmitter()
  public subject$ = new Subject()
  public onEdit: boolean = false;

  
  constructor(public dialog: MatDialog, private cursoService: CursoService, public loginService: LoginService) { }

  ngOnInit(): void {

  }
  edit(){
    this.onEdit = true
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogCursoComponent, {
      width: '80%',
      data: this.curso
    });

    dialogRef.afterClosed().pipe(
      takeUntil(this.subject$)
    ).subscribe(result => {

      if(result){

        this.cursoDeletado.emit(result)
        this.remover(result);
      }
    });
  }
  
  remover(curso: Curso){


    this.cursoService.delete(this.curso)
    .subscribe(
      ()=>{

      }
    )
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
