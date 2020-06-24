import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresposComponent } from './userrespos.component';

describe('UserresposComponent', () => {
  let component: UserresposComponent;
  let fixture: ComponentFixture<UserresposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserresposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserresposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
