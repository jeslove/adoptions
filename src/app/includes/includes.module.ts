import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarsComponent } from './navbars/navbars.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[NavbarsComponent]
})
export class IncludesModule { }
