import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/core/models/profile_model';
import { ChangeDataService } from 'src/app/core/services/change-data.service';
import { GetProfileService } from 'src/app/core/services/get-profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  response: ProfileModel = {};

  constructor(public dataService: ChangeDataService, private getProfileService: GetProfileService) { }

  ngOnInit() {
    if (!this.dataService.profileInformation) {
      this.dataService.isLoading.emit(true);
      this.getProfileService.getProfile().subscribe(data => {
        this.dataService.isLoading.emit(false);
        this.dataService.profileInformation = data;
      });
    }
  }

  openContact(url: any) {
    window.open(url, "_blank");
  }

}
