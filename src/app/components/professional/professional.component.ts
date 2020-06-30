import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Observable, Subject } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { NavService } from 'src/app/services/nav.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit, OnDestroy {

  private subject$: Subject<any> = new Subject()
  public experiencias: Experiencia[] // Observable<Experiencia[]> = this.experienciaService.get();
  constructor(private experienciaService: ExperienciaService, private navService: NavService) { 
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

  ngOnDestroy(){
    this.subject$.next();
  }

}
