import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Observable, Subject } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { NavService } from 'src/app/services/nav.service';
import { takeUntil } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit, OnDestroy {

  private subject$: Subject<any> = new Subject()
  public experiencias: Experiencia[] // Observable<Experiencia[]> = this.experienciaService.get();
  public onAdd: boolean = false




  constructor(private experienciaService: ExperienciaService, 
    private navService: NavService,
    public usuarioService: UsuarioService,
    public loginService: LoginService) { 
    navService.selectedOption = 'professional'
  }

  ngOnInit(): void {
    this.experienciaService.get()
    .pipe(
      takeUntil(this.subject$)
    )
    .subscribe(
      (experiencias)=>{
        this.experiencias = experiencias;
      }
    )
  }
  atualizaLista(experiencia){


    
    let indice = this.experiencias.findIndex(e => e._id = experiencia._id)

    if(indice >= 0 ){
      this.experiencias[indice]= experiencia;
    }
  }
  ngOnDestroy(){
    this.subject$.next();
  }

  novo(){

    this.onAdd = true;

  }
adicionar(experiencia: Experiencia){
  this.experiencias.unshift(experiencia)
  this.cancelar();
}


remover(experiencia: Experiencia){
  let indice = this.experiencias.findIndex(e => e._id = experiencia._id)

    if(indice >= 0 ){
      this.experiencias.splice(indice, 1);
    }
}
  cancelar(){
    this.onAdd = false;
  }

}
