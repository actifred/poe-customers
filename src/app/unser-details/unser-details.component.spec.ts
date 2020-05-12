import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnserDetailsComponent } from './unser-details.component';

describe('UnserDetailsComponent', () => {
  let component: UnserDetailsComponent;
  let fixture: ComponentFixture<UnserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
