import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLoading:boolean = false;
  erroMSG: string;
  Usuario = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });
  constructor(private fb: FormBuilder, 
              private loginService: LoginService, 
              private route: Router,
               private navService: NavService) { 

                navService.selectedOption = 'Login'
               }

  ngOnInit(): void {
  }
  login(){
    this.isLoading = true
    this.erroMSG = ''
    this.loginService.login(this.Usuario.value)

    .subscribe(
      
      (usuario)=>{
        this.isLoading = false;
        this.loginService.usuario = usuario
        if(this.loginService.usuario.token){
          this.route.navigate(['/'])
        }
        else{
          this.erroMSG = 'E-mail ou senha inválido'
        }
      },
      (erro)=>{
        this.isLoading = false;
        this.erroMSG = erro
      }
    )
    
  }

}
