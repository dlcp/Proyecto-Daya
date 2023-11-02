import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ],
  exports: [
    PagesComponent,
    PerfilComponent
  ]
})
export class PagesModule { }
