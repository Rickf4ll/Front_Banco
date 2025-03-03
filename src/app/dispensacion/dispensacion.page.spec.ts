import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DispensacionPage } from './dispensacion.page';

describe('DispensacionPage', () => {
  let component: DispensacionPage;
  let fixture: ComponentFixture<DispensacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
