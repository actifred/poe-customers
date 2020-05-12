import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCustomerComponent } from './fiche-customer.component';

describe('FicheCustomerComponent', () => {
  let component: FicheCustomerComponent;
  let fixture: ComponentFixture<FicheCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
