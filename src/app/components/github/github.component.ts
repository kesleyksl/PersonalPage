import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UserRepos } from 'src/app/models/user-repos';
import { ReposService } from 'src/app/services/repos.service';
import { takeUntil } from 'rxjs/operators';
import { Repositorios } from 'src/app/models/repositorios';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

 
  private unsubscribe$: Subject<any> = new Subject()
  public userRepos: UserRepos;
  public user: Observable<UserRepos>;


  public repositorios: Observable<Repositorios[]>

  constructor(private reposService: ReposService, private navService: NavService) {

    navService.selectedOption = 'github'
    // this.user = this.reposService.getUser('kesleyksl')
    this.reposService.getUser('kesleyksl')
      .pipe(
        takeUntil(this.unsubscribe$))
      .subscribe(
        (user) => {


          this.userRepos = user;
        },

      )

      this.repositorios = this.reposService.getRepos('kesleyksl');
      
      
     
  }


  ngOnInit(): void {



  }

  ngOnDestroy() {

    this.unsubscribe$.next();
  }

}
