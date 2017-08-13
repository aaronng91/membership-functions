import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipFunctionComponent } from './membership-function.component';

describe('MembershipFunctionComponent', () => {
  let component: MembershipFunctionComponent;
  let fixture: ComponentFixture<MembershipFunctionComponent>;

  const mockData = {
    name: 'Mock',
    lowerStart: 900,
    lowerTop1: 1000,
    lowerTop2: 1500,
    lowerEnd: 1600,
    upperStart: 800,
    upperTop1: 1000,
    upperTop2: 1500,
    upperEnd: 1700
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipFunctionComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    component.lowestValue = 0;
    component.highestValue = 2000;
    fixture.detectChanges();
  });

  it('should calculate the start position & width of the core region', () => {
    expect(component.coreStart).toEqual(50);
    expect(component.coreWidth).toEqual(25);
  });

  it('should calculate the start position & width of the fuzzy region', () => {
    expect(component.fuzzyStart).toEqual(40);
    expect(component.fuzzyWidth).toEqual(45);
  });

  it('should display the name of the function in the core region', () => {
    expect(fixture.nativeElement.querySelector('.core').textContent).toContain(mockData.name);
  });
});
