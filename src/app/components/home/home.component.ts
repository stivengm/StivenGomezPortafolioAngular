import { Component } from '@angular/core';
import { ProfileModel } from 'src/app/core/models/profile_model';
import { ChangeDataService } from 'src/app/core/services/change-data.service';
import { GetProfileService } from '../../core/services/get-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  response: ProfileModel = {};
  constructor(private getProfileService: GetProfileService, private dataService: ChangeDataService) { }
  
  ngOnInit() {
    this.dataService.isLoading.emit(true);
    this.getProfileService.getProfile().subscribe(data => {
      this.dataService.isLoading.emit(false);
      this.response = data
    });
  }

}

