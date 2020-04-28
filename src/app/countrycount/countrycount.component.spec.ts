import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrycountComponent } from './countrycount.component';

describe('CountrycountComponent', () => {
  let component: CountrycountComponent;
  let fixture: ComponentFixture<CountrycountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrycountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrycountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
