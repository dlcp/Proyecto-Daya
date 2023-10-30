import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoutingComponent } from './routing/routing.component';




@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    RoutingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent
  ],
})
export class AuthModule { }
