import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Subject } from 'rxjs';
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


  constructor(private usuarioService: UsuarioService,public loginService: LoginService, private navService: NavService, private fb: FormBuilder) {
    navService.selectedOption = 'home'


  }

   ngOnInit(): void {
    
    this.usuarioService.get()
    .pipe(
      takeUntil(this.subject$),
      tap(
        (users)=>{
          this.UsuarioEdit.setValue({
            _id: users[0]._id,
            name: users[0].name,
            profession: users[0].profession,
            description: users[0].description
        })
      })
 
      
    )
    .subscribe(
      (users)=>{
        this.usuario = users[0];
        
      }
    )
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
