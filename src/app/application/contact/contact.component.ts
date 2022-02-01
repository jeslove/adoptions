import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit , OnDestroy{

  addApplicanteContactForm!:FormGroup;

  subscription!:Subscription;

  constructor(private fb:FormBuilder, private dataservice:DataService) { }


  ngOnInit(): void {
    this.addApplicanteContactForm = this.fb.group({
      nationality:['',[Validators.required]],
      liveOutSideGhana:['',[Validators.required]],
      placeOfResidence:['',[Validators.required]],
      residenceaddress:['',[Validators.required]],
      postalAddress:['',[Validators.required]],
      contactNo:['',[Validators.required]],
      emailAddres:['',[Validators.required]],
      nationalIdType:['',[Validators.required]],
      nationalIdNo:['',[Validators.required]],
    });
  }

  Onsubmitted()
  {
    this.subscription = this.dataservice.applicantContactRequest(this.addApplicanteContactForm.value)
    .subscribe(async (resp:any) => {
      if(resp.status == 'ok')
      {
        console.log(resp.response);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe;
  }

}
