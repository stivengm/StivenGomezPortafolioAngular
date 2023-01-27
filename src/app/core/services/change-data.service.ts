import { Injectable, EventEmitter } from '@angular/core';
import { ProfileModel } from '../models/profile_model';

@Injectable({
  providedIn: 'root'
})
export class ChangeDataService {

  profileInformation: ProfileModel = {};

  isLoading = new EventEmitter<boolean>();
  constructor() { }
}
