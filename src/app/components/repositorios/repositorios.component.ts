import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { ReposService } from 'src/app/services/repos.service';
import { takeUntil, tap } from 'rxjs/operators';
import { UserRepos } from 'src/app/models/user-repos';
import { Repositorios } from 'src/app/models/repositorios';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.css']
})
export class RepositoriosComponent implements OnInit {

  @Input() repositorio: Repositorios

  constructor(private reposService: ReposService) {
    
  }


  ngOnInit(): void {



  }

  ngOnDestroy() {

  }

}
