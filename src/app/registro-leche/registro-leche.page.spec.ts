import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroLechePage } from './registro-leche.page';

describe('RegistroLechePage', () => {
  let component: RegistroLechePage;
  let fixture: ComponentFixture<RegistroLechePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLechePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
