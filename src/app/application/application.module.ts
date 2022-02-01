import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddapplyComponent } from './addapply/addapply.component';
import { AddchildComponent } from './addchild/addchild.component';
import { ContactComponent } from './contact/contact.component';
import { BiodataComponent } from './biodata/biodata.component';



@NgModule({
  declarations: [
    AddapplyComponent,
    AddchildComponent,
    ContactComponent,
    BiodataComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule
  ]
})
export class ApplicationModule { }
