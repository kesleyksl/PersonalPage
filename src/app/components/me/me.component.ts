import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  private subject$: Subject<any> = new Subject();
  public onEdit: boolean = false;
  public isLoading: boolean = false;
  public user$: Observable<Usuario>

  public usuario: Usuario = {
    _id: '',
    email: '',
    name: '',
    description: '',
    profession: '',
    token: ''
  }

  UsuarioEdit = this.fb.group({
    _id:['', [Validators.required]],
    name:['', [Validators.required]],
    profession:['', [Validators.required]],
    description:['', [Validators.required]],
  })


  constructor(public usuarioService: UsuarioService,public loginService: LoginService, private navService: NavService, private fb: FormBuilder) {
    navService.selectedOption = 'home'


  }

   ngOnInit(): void {
    
    this.user$ = this.usuarioService.get()
    
      
   
  }

  ngOnDestroy() {
    this.subject$.next();
  }

  submit(){
    this.isLoading = true;
    this.usuarioService.update(this.UsuarioEdit.value)
    .subscribe(
      (usuario)=>{
        this.usuario = usuario;
        this.isLoading = false;
        this.onEdit = false
      }
    )
  }
  
  edit(){
    this.onEdit = true
  }
  
    cancelar(){
     
      this.isLoading = false,
      this.onEdit = false
    }
}
