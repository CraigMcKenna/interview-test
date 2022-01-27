import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Boolean to decide focal UI window
  focuslist = true;

  // Initializing the list for filtered countries
  filter = [] as string[];

  // Method to update the filter with the sent list from the filter UI
  updateFilter(item: string[]){
    this.filter = item;
  }

  // Method to toggle the focal window based on signals sent from either the list UI or the filter UI
  toggle(condition: string) {
    console
    if (condition == 'filter') {
      this.focuslist = false;
    }
    else {
      this.focuslist = true;
    }
  }

}