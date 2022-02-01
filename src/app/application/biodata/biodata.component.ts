import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit ,OnDestroy{

  addbiodataForm!:FormGroup;

  subscription!:Subscription;

  constructor(private fb:FormBuilder, private dataservice:DataService) { }
  
  ngOnInit(): void {
    this.addbiodataForm = this.fb.group({
      appFName:['',[Validators.required]],
      surName:['',[Validators.required]],
      fullName:['',[Validators.required]],
      appGender:['',[Validators.required]],
      dateofBirth:['',[Validators.required]],
      user:['',[Validators.required]],
    });
  }

  Onsubmitted()
  {
    this.subscription = this.dataservice.appBiodataprofileRequest(this.addbiodataForm.value)
    .subscribe(async (resp:any) => {
      if(resp.status == 'ok')
      {
        console.log(resp.response);
      }
    })
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe;
  }

}
