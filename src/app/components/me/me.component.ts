import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  public name: string = "Kesley de Mello"
  
  constructor(private reposService: ReposService, private navService: NavService) {
    navService.selectedOption = 'home'
   }

  ngOnInit(): void {
   
  }

  ngOnDestroy(){

  }
}
