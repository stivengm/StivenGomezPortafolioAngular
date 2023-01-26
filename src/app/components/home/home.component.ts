import { Component } from '@angular/core';
import { ProfileModel } from 'src/app/core/models/profile_model';
import { GetProfileService } from '../../core/services/get-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = true;
  response: ProfileModel = {};
  constructor(private getProfileService: GetProfileService) { }
  
  ngOnInit() {
    this.getProfileService.getProfile().subscribe(data => {
      this.isLoading = false;
      this.response = data
    });
  }

}

