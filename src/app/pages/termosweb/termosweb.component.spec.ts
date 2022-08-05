import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermoswebComponent } from './termosweb.component';

describe('TermoswebComponent', () => {
  let component: TermoswebComponent;
  let fixture: ComponentFixture<TermoswebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermoswebComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
