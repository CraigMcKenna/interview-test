import { Component, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Data } from 'src/assets/data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  // Setting data variable from JSON file and naming columns for the table
  data = Data.data;
  columns = ["Year", "Country", "Operator", "Formal Well Name"];

  // Setting input and output ports to connect with the app component
  @Output() toggleEventEmitter = new EventEmitter<string>();
  @Input() filterlist: string[] = [];

  // A sender method for the output event emitter
  sendItem(item: string) {
    this.toggleEventEmitter.emit(item);
  }

  // On update from any changes, specifically 'filterlist' being updated, apply the new filter to the table
  ngOnChanges(changes: SimpleChanges) {
    this.applyFilter(this.filterlist);
  }

  // Apply a filter from a list of strings such that only entries with a country in the list are shown
  applyFilter(items: string[]) {
    if(this.filterlist.length > 0) {
      this.data = this.data.filter(d => this.filterlist.includes(d.country))
    }
  }

  // Send filtered countries list to the console
  save() {
    console.log(this.filterlist)
  }

}
