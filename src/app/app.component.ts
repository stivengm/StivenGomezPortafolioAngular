import { Component } from '@angular/core';
import { ChangeDataService } from './core/services/change-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stiven_gomez_portfolio';
  isLoading: boolean = true;
  constructor(public dataService: ChangeDataService) { }

  ngOnInit() {
    this.dataService.isLoading.subscribe(data => this.isLoading = data);
  }
}
