import { Component, OnInit, Input } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: Curso
  constructor() { }

  ngOnInit(): void {

  }

}
