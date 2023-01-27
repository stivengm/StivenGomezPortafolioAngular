import { Component, OnInit } from '@angular/core';
import { ChangeDataService } from 'src/app/core/services/change-data.service';
import { GetProfileService } from 'src/app/core/services/get-profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private dataService: ChangeDataService, private getProfileService: GetProfileService) { }

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
