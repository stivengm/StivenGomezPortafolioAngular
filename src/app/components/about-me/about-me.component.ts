import { Component, OnInit } from '@angular/core';
import { ChangeDataService } from 'src/app/core/services/change-data.service';
import { GetProfileService } from 'src/app/core/services/get-profile.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor( public dataService: ChangeDataService, private getProfileService: GetProfileService ) {}

  ngOnInit() {
    if (!this.dataService.profileInformation) {
      this.dataService.isLoading.emit(true);
      this.getProfileService.getProfile().subscribe(data => {
        this.dataService.isLoading.emit(false);
        this.dataService.profileInformation = data;
      });
    }
  }

}
