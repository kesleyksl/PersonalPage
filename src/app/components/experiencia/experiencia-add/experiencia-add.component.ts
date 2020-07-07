import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-experiencia-add',
  templateUrl: './experiencia-add.component.html',
  styleUrls: ['./experiencia-add.component.css']
})
export class ExperienciaAddComponent implements OnInit {

  @Output() Cancelar = new EventEmitter();
  public isLoading: boolean = false;
  Experiencia = this.fb.group({

    cargo: ['', [Validators.required]],
    empresa: ['', [Validators.required]],
    mes_inicio: ['', [Validators.required]],
    ano_inicio: ['', [Validators.required]],
    mes_termino: ['' ],
    ano_termino: [''],
    descricao: ['', [Validators.required]],
   

  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  submit(){
    this.isLoading = true
  }
  cancelar(){
    this.isLoading = false;
    this.Cancelar.emit('true');
  }

}
