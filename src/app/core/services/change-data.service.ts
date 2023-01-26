import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeDataService {
  profileInformation$ = new EventEmitter<boolean>();
  isLoading = new EventEmitter<boolean>();
  constructor() { }
}
