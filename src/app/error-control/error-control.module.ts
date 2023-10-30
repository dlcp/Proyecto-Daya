import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagesFoundComponent } from './nopages-found/nopages-found.component';



@NgModule({
  declarations: [
    NopagesFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NopagesFoundComponent
  ]
})
export class ErrorControlModule { }
