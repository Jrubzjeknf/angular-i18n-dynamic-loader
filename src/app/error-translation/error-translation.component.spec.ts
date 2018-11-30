import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTranslationComponent } from './error-translation.component';

describe('ErrorTranslationComponent', () => {
  let component: ErrorTranslationComponent;
  let fixture: ComponentFixture<ErrorTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
