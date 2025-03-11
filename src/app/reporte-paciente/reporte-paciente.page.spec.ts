import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportePacientePage } from './reporte-paciente.page';

describe('ReportePacientePage', () => {
  let component: ReportePacientePage;
  let fixture: ComponentFixture<ReportePacientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
