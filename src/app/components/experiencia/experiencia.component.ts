import { Component, OnInit, Input } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  @Input() experiencia: Experiencia;
  constructor() { }

  ngOnInit(): void {

  }

}
