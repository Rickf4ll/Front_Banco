import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearHistoriaClinicaPage } from './crear-historia-clinica.page';

describe('CrearHistoriaClinicaPage', () => {
  let component: CrearHistoriaClinicaPage;
  let fixture: ComponentFixture<CrearHistoriaClinicaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHistoriaClinicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
