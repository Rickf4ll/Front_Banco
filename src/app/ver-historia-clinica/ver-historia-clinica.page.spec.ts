import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerHistoriaClinicaPage } from './ver-historia-clinica.page';

describe('VerHistoriaClinicaPage', () => {
  let component: VerHistoriaClinicaPage;
  let fixture: ComponentFixture<VerHistoriaClinicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHistoriaClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
