import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { WebRoutingModule } from './web-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    WebRoutingModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class WebModule { }
