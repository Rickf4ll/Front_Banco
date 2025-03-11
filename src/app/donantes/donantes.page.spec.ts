import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonantesPage } from './donantes.page';

describe('DonantesPage', () => {
  let component: DonantesPage;
  let fixture: ComponentFixture<DonantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DonantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
