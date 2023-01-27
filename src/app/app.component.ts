import { Component, OnInit } from '@angular/core';
import { ChangeDataService } from './core/services/change-data.service';
import { GetProfileService } from './core/services/get-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stiven_gomez_portfolio';
  isLoading: boolean = true;
  constructor(private getProfileService: GetProfileService, public dataService: ChangeDataService) { }

  ngOnInit() {
    this.dataService.isLoading.subscribe(data => this.isLoading = data);

    this.getProfileService.getProfile().subscribe(data => {
      this.dataService.isLoading.emit(false);
      this.dataService.profileInformation = data;
    });
  }
}
