import { AdicionarComponent } from './adicionar/adicionar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  {
  path: "",
  pathMatch: "full",
  redirectTo: "login" 
  }
  ,
  {
    path: "login", component: LoginComponent
  }
  ,
  {
    path: "agenda",
    component: AgendaComponent
  }
  ,
  {
    path: "listagem",
    component: ListagemComponent
  }
  ,
  {
    path: "adicionar",
    component: AdicionarComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
