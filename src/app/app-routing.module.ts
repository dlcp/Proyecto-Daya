import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebModule } from './web/web.module';
import { AuthModule } from './auth/auth.module';
import { NopagesFoundComponent } from './error-control/nopages-found/nopages-found.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: '**', component:NopagesFoundComponent}
];

@NgModule({
  imports: [
    WebModule,
    PagesModule,
    AuthModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
