import { Component, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Data } from 'src/assets/data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  // Setting data variable from JSON file
  data = Data.data;

  // Initializing the list for filtered countries
  filter = [] as string[];
  
  // Setting output ports for sending the filter list and the toggle signal to app component
  @Output() filterEventEmitter = new EventEmitter<string[]>();
  @Output() toggleEventEmitter = new EventEmitter<string>();

  // Creating a list of countries from the data *** alternatively a custom list can be used, 
  // but there is no point to filtering countries that are not present
  countries = [...new Map(this.data.map((x) => [x.country, x.country])).values()];

  // Methods to emit the filter list and toggle signal together
  sendItemFilter(item: string[]) {
    this.filterEventEmitter.emit(item);
  }

  sendItemToggle(item: string) {
    this.toggleEventEmitter.emit(item);
  }

  sendItems() {
    this.sendItemFilter(this.filter); 
    this.sendItemToggle('list')
  }

  // Default drop method for CDKDragDrop compoments
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
