import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './template/nav/nav.component';
import { MeComponent } from './components/me/me.component';
import { SchoolComponent } from './components/school/school.component';
import { RepositoriosComponent } from './components/repositorios/repositorios.component';
import { HttpClientModule } from '@angular/common/http';
import { UserresposComponent } from './components/userrespos/userrespos.component';
import { GithubComponent } from './components/github/github.component';
import { CursoComponent } from './components/curso/curso.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienciaAddComponent } from './components/experiencia/experiencia-add/experiencia-add.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogCursoComponent } from './components/curso/dialog-curso/dialog-curso.component';
import { CursoAddComponent } from './components/curso/curso-add/curso-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MeComponent,
    SchoolComponent,
    RepositoriosComponent,
    UserresposComponent,
    GithubComponent,
    CursoComponent,
    ProfessionalComponent,
    ExperienciaComponent,
    LoginComponent,
    ExperienciaAddComponent,
    DialogComponent,
    DialogCursoComponent,
    CursoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
