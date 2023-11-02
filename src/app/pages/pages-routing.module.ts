import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { PagesComponent } from './pages.component';
const routes: Routes = [
  { path: 'pages', component:PagesComponent},
  { path: 'perfil', component:PerfilComponent},
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
