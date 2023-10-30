import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RoutingComponent } from './auth/routing/routing.component';
import { UserComponent } from './auth/user/user.component';
import { NopagesFoundComponent } from './error-control/nopages-found/nopages-found.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoryComponent } from './web/category/category.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { ProductComponent } from './web/product/product.component';
import { WebModule } from './web/web.module';
import { ErrorControlModule } from './error-control/error-control.module';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebModule,
    ErrorControlModule,
    AuthModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
