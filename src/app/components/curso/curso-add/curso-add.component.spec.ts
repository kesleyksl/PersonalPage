import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAddComponent } from './curso-add.component';

describe('CursoAddComponent', () => {
  let component: CursoAddComponent;
  let fixture: ComponentFixture<CursoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
