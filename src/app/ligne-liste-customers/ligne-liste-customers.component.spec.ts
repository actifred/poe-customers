import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneListeCustomersComponent } from './ligne-liste-customers.component';

describe('LigneListeCustomersComponent', () => {
  let component: LigneListeCustomersComponent;
  let fixture: ComponentFixture<LigneListeCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneListeCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneListeCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
