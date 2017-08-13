import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let chartElement: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      chartElement = fixture.nativeElement.querySelector('app-chart');
    });
  }));

  it(`should contain a chart component`, () => {
    expect(chartElement).not.toBe(null);
  });

  it('should pass data into the chart component', async(() => {
    expect(chartElement.functions).toEqual(component.data);
  }));
});
