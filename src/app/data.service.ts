import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { Adoption } from "./shared/Adoption";
import { Addchild } from "./shared/Addchild";
import { ApplicantContact } from './shared/ApplicantContact';
import { ApplicantProfile } from './shared/ApplicantProfile';
import { Biodataprofile } from './shared/Biodataprofile';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  addAdoptionRequest(data:any):Observable<Adoption>
  {
    return this.http.post<Adoption>(baseURL + 'application​/addapply',data).pipe(catchError(this.handleError));
  }

  addChildRequest(data:any):Observable<Addchild>
  {
    return this.http.post<Addchild>(baseURL + 'children​/addchild',data).pipe(catchError(this.handleError));
  }

  applicantContactRequest(data:any):Observable<ApplicantContact>
  {
    return this.http.post<ApplicantContact>(baseURL + 'applicantContact', data).pipe(catchError(this.handleError));
  }


  appBiodataprofileRequest(data:any):Observable<Biodataprofile>
  {
    return this.http.post<Biodataprofile>(baseURL + 'applicantprofile/biodata', data).pipe(catchError(this.handleError));
  }

  addApplicantProfileRequest(data:any):Observable<ApplicantProfile>
  {
    return this.http.put<ApplicantProfile>(baseURL + 'applicantprofile/biodata', data).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` +`body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  region =[
    {id:1,name:'Ahafo'},
    {id:2,name:'Ashanti'},
    {id:3,name:'Bono'},
    {id:4,name:'Bono East'},
    {id:5,name:'Central'},
    {id:6,name:'Eastern'},
    {id:7,name:'Greater Accra'},
    {id:8,name:'North East'},
    {id:9,name:'Northern'},
    {id:10,name:'Oti'},
    {id:11,name:'Savannah'},
    {id:12,name:'Upper East'},
    {id:13,name:'Upper West'},
    {id:14,name:'Volta'},
    {id:15,name:'Western'},
    {id:16,name:'Western North'},
  ];
}
