import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';
import { NavService } from 'src/app/services/nav.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  private subject$: Subject<any> = new Subject()
  public usuario: Usuario = {
    email: '',

    name: '',
    description: '',
    profession: '',
    token: ''
  }

  constructor(private usuarioService: UsuarioService, private navService: NavService) {
    navService.selectedOption = 'home'



  }

   ngOnInit(): void {
    
    this.usuarioService.get()
    .pipe(
      takeUntil(this.subject$)
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
}
