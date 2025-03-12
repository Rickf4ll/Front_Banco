import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarHistoriaClinicaPage } from './actualizar-historia-clinica.page';

describe('ActualizarHistoriaClinicaPage', () => {
  let component: ActualizarHistoriaClinicaPage;
  let fixture: ComponentFixture<ActualizarHistoriaClinicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarHistoriaClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
