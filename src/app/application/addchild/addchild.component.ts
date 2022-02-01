import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.component.html',
  styleUrls: ['./addchild.component.css']
})
export class AddchildComponent implements OnInit ,OnDestroy{

  addAddChildForm!:FormGroup;

  subscription!:Subscription;

  filename:any;

  getRegions:any[] = [];
  
  constructor(private fb:FormBuilder,private dataservice:DataService) { }
 
  ngOnInit(): void {

    this.addAddChildForm = this.fb.group({
      firstName:['',[Validators.required]],
      surName:['',[Validators.required]],
      knownAs:['',[Validators.required]],
      sex:['',[Validators.required]],
      photoPath:['',[Validators.required]],
      studyPath:['',[Validators.required]],
      dateOfBirth:['',[Validators.required]],
      foundRelinguished:['',[Validators.required]],
      intake:['',[Validators.required]],
      placeOfBirth:['',[Validators.required]],
      region:['',[Validators.required]],
      legalRep:['',[Validators.required]],
    });

    this.getRegions = this.dataservice.region;
  }

  onFileChange(event:any) {
    this.filename = File = event.target.files[0];
  }

  // using formdata because of Image path
  Onsubmitted(){

    const formdata = new FormData();
    formdata.append('photoPath',this.filename);
    formdata.append('sex',this.addAddChildForm.value.sex);
    formdata.append('surName',this.addAddChildForm.value.surName);
    formdata.append('knownAs',this.addAddChildForm.value.knownAs);
    formdata.append('legalRep',this.addAddChildForm.value.legalRep);
    formdata.append('firstName',this.addAddChildForm.value.firstName);
    formdata.append('region',this.addAddChildForm.value.region);
    formdata.append('studyPath',this.addAddChildForm.value.studyPath);
    formdata.append('dateOfBirth',this.addAddChildForm.value.dateOfBirth);
    formdata.append('placeOfBirth',this.addAddChildForm.value.placeOfBirth);
    formdata.append('intake',this.addAddChildForm.value.intake);
    formdata.append('foundRelinguished',this.addAddChildForm.value.foundRelinguished);
    this.subscription = this.dataservice.addChildRequest(formdata)
    .subscribe(async (resp:any) => {
      if(resp.status == 'ok')
      {
        // your response here
        console.log(resp.response);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe;
  }


}
