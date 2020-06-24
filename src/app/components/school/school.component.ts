import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { Observable } from 'rxjs';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  public cursos: Observable<Curso[]> = this.cursoService.get();
  constructor(private cursoService: CursoService, private navService: NavService) {
    navService.selectedOption = 'school'
   }

  ngOnInit(): void {

  }

}
