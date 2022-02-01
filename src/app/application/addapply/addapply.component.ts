import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-addapply',
  templateUrl: './addapply.component.html',
  styleUrls: ['./addapply.component.css']
})
export class AddapplyComponent implements OnInit ,OnDestroy{

  subscription!:Subscription;

  addAdoptionForm!:FormGroup;

  constructor(private fb:FormBuilder, private dataservice:DataService) { }
 

  ngOnInit(): void {

    this.addAdoptionForm = this.fb.group({
      applyCode:['',[Validators.required]],
      country:['',[Validators.required]],
      adoptionGroup:['',[Validators.required]],
      adoptionCategory:['',[Validators.required]],
      adoptionType:['',[Validators.required]],
      mindAge:['',[Validators.required]],
      maxdAge:['',[Validators.required]],
      childXtics:['',[Validators.required]],
      preferedSex:['',[Validators.required]],
    });
  }

  Onsubmitted()
  {
    if(this.addAdoptionForm.valid)
    {
      this.subscription = this.dataservice.addAdoptionRequest(this.addAdoptionForm.value)
      .subscribe(async (resp:any) => {
        if(resp.status == 'ok')
        {
          console.log(resp.response);
        }
      })
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe;
  }
}
