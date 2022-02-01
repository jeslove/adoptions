import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddapplyComponent } from './addapply/addapply.component';
import { AddchildComponent } from './addchild/addchild.component';
import { BiodataComponent } from './biodata/biodata.component';
import { ContactComponent } from './contact/contact.component';
import { ProfilesComponent } from './profiles/profiles.component';


const routes: Routes = [
  {path:'addapply',component:AddapplyComponent},
  {path:'profile',component:ProfilesComponent},
  {path:'contact',component:ContactComponent},
  {path:'addchild',component:AddchildComponent},
  {path:'biodata',component:BiodataComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
