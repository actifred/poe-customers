import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCustomersComponent } from './liste-customers.component';

describe('ListeCustomersComponent', () => {
  let component: ListeCustomersComponent;
  let fixture: ComponentFixture<ListeCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
