import { Component, Input } from '@angular/core';
import { MembershipFunction } from '../../models';

@Component({
  selector: 'app-membership-function',
  templateUrl: './membership-function.component.html',
  styleUrls: ['./membership-function.component.css']
})
export class MembershipFunctionComponent {
  @Input() data: MembershipFunction;
  @Input() lowestValue: number;
  @Input() highestValue: number;

  constructor() { }

  get coreStart() {
    return (this.data.upperTop1 - this.lowestValue) / this.range * 100;
  }

  get coreWidth() {
    return (this.data.upperTop2 - this.data.upperTop1) / this.range * 100;
  }

  get fuzzyStart() {
    return (this.data.upperStart - this.lowestValue) / this.range * 100;
  }

  get fuzzyWidth() {
    return (this.data.upperEnd - this.data.upperStart) / this.range * 100;
  }

  private get range() {
    return this.highestValue - this.lowestValue;
  }
}
