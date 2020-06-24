import { Component, OnInit, Input } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';
import { UserRepos } from 'src/app/models/user-repos';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-userrespos',
  templateUrl: './userrespos.component.html',
  styleUrls: ['./userrespos.component.css']
})
export class UserresposComponent implements OnInit {

  @Input() userRepos: UserRepos;


  constructor(private reposService: ReposService) { }

  ngOnInit(): void {

  }

}
