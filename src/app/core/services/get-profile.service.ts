import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { ProfileModel } from '../models/profile_model';

@Injectable({
  providedIn: 'root'
})
export class GetProfileService {

  // headers = new HttpHeaders().set('Content-Type', 'application/json');
  url: string = 'https://portfolio-51fbb-default-rtdb.firebaseio.com/profile.json';
  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get(`${this.url}`).pipe();
  }

}
