import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComponent } from './chart.component';
import { MembershipFunction } from '../models';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  let functionElements: any;

  const mockData: MembershipFunction[] = [{
    name: 'Low',
    lowerStart: 0,
    lowerTop1: 0,
    lowerTop2: 1500,
    lowerEnd: 1600,
    upperStart: 0,
    upperTop1: 0,
    upperTop2: 1500,
    upperEnd: 1700
  }, {
    name: 'Medium',
    lowerStart: 1400,
    lowerTop1: 1500,
    lowerTop2: 2500,
    lowerEnd: 2600,
    upperStart: 1300,
    upperTop1: 1500,
    upperTop2: 2500,
    upperEnd: 2700
  }, {
    name: 'High',
    lowerStart: 2400,
    lowerTop1: 2500,
    lowerTop2: 3500,
    lowerEnd: 3500,
    upperStart: 2300,
    upperTop1: 2500,
    upperTop2: 3500,
    upperEnd: 3500
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    component.functions = mockData;
    fixture.detectChanges();

    functionElements = fixture.nativeElement.querySelectorAll('app-membership-function');
  });

  it('should have a membership function component for every membership function', () => {
    expect(functionElements.length).toEqual(mockData.length);
  });

  it('should pass each membership function data to each component in order', () => {
    Array.from(Array(mockData.length).keys()).forEach(i => {
      expect(functionElements[i].data).toEqual(mockData[i]);
    });
  });

  it('should pass the lowest & highest possible value in the data to the components', () => {
    Array.from(Array(mockData.length).keys()).forEach((i) => {
      expect(functionElements[i].lowestValue).toEqual(0);
      expect(functionElements[i].highestValue).toEqual(3500);
    });
  });
});
