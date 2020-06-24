import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  public experiencias: Observable<Experiencia[]> = this.experienciaService.get();
  constructor(private experienciaService: ExperienciaService, private navService: NavService) { 
    navService.selectedOption = 'professional'
  }

  ngOnInit(): void {
  }

}
