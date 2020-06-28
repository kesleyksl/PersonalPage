import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';
import { NavService } from 'src/app/services/nav.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  public usuario: Usuario = {
    email: '',
    password: '',
    name: '',
    description: '',
    profession: '',
  }

  constructor(private usuarioService: UsuarioService, private navService: NavService) {
    navService.selectedOption = 'home'



  }

   ngOnInit(): void {
    
    this.usuarioService.get().subscribe(
      (users)=>{
        this.usuario = users[0];
      }
    )
  }

  ngOnDestroy() {

  }
}
