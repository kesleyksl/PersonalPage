import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia;

  @Output() experienciaEdit = new EventEmitter();

  @Output() removido = new EventEmitter();


  private subject$ = new Subject<any>();

  private cancel$: Subject<any> = new Subject()
  public onEdit: boolean = false;


  Experiencia = this.fb.group({

    cargo: ['', [Validators.required]],
    _id: ['', [Validators.required]],
    empresa: ['', [Validators.required]],
    mes_inicio: ['', [Validators.required]],
    ano_inicio: ['', [Validators.required]],
    mes_termino: ['' ],
    ano_termino: [''],
    descricao: ['', [Validators.required]],
   

  });


  isLoading: boolean;
  constructor(
    public loginService: LoginService,
    private fb: FormBuilder,
    private experienciaService: ExperienciaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.Experiencia.setValue({cargo: this.experiencia.cargo,
                                _id: this.experiencia._id,
                                empresa: this.experiencia.empresa,
                                mes_inicio: this.experiencia.mes_inicio,
                                ano_inicio: this.experiencia.ano_inicio,
                                mes_termino: this.experiencia.mes_termino || '',
                                ano_termino: this.experiencia.ano_termino || '',
                                descricao: this.experiencia.descricao || ''})
  }

  edit(){
    this.onEdit = true;
  }

  submit(){
    this.isLoading = true;


    this.experienciaService.edit(this.Experiencia.value)
    .pipe(
      takeUntil(this.cancel$)
    )
    .subscribe(
      experiencia=>{
        this.experienciaEdit.emit(experiencia);
        this.onEdit = false
      }
    )
  }


  cancelar(){
    this.cancel$.next();
    this.onEdit = false
    this.isLoading = false;

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: this.experiencia
    });

    dialogRef.afterClosed().pipe(
      takeUntil(this.subject$)
    ).subscribe(result => {

      if(result){
        this.removido.emit(result)
        this.remover();
      }
    });
  }

  remover(){


    this.experienciaService.deletar(this.experiencia)
    .subscribe(
      ()=>{

      }
    )
  }

  ngOnDestroy(){
    this.subject$.next();
  }
}
