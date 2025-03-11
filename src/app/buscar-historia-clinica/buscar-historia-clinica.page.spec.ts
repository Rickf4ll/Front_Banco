import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarHistoriaClinicaPage } from './buscar-historia-clinica.page';

describe('BuscarHistoriaClinicaPage', () => {
  let component: BuscarHistoriaClinicaPage;
  let fixture: ComponentFixture<BuscarHistoriaClinicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarHistoriaClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
