import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontroComponent } from './encontro.component';

describe('EncontroComponent', () => {
  let component: EncontroComponent;
  let fixture: ComponentFixture<EncontroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncontroComponent]
    });
    fixture = TestBed.createComponent(EncontroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
