import { Component, Input } from '@angular/core';
import { MembershipFunction } from '../models';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  @Input() functions: MembershipFunction[];

  constructor() { }

  get lowestValue() {
    return this.functions[0].upperStart;
  }

  get highestValue() {
    return this.functions[this.functions.length - 1].upperEnd;
  }
}
