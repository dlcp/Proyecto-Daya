import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';




@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    UserComponent,
    RegisterComponent,
    AuthComponent
  ],
})
export class AuthModule { }
