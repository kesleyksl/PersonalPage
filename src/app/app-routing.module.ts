import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from './components/me/me.component';
import { SchoolComponent } from './components/school/school.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { GithubComponent } from './components/github/github.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [{
  path:"",
  component: MeComponent
},{
  path: "School",
  component: SchoolComponent
},{
  path: "Github",
  component: GithubComponent
},{
  path: "Professional",
  component: ProfessionalComponent
},{
  path: "Login",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
