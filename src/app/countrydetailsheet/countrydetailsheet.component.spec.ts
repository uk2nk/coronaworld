import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrydetailsheetComponent } from './countrydetailsheet.component';

describe('CountrydetailsheetComponent', () => {
  let component: CountrydetailsheetComponent;
  let fixture: ComponentFixture<CountrydetailsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrydetailsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrydetailsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
