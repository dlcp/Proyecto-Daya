import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web.component';


const routes: Routes = [
  { path:'dashboard', component:WebComponent,
  children: [
    { path: '', component: DashboardComponent,
    children: [
      { path: 'product', component:ProductComponent},
      { path: 'category', component:CategoryComponent},
    ]
  },
    
  ]
},
   //{ path: '**', component:NopagesFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WebRoutingModule { }
