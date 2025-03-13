import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPasteurizadoPage } from './registropasteurizado.page';

describe('RegistroPasteurizadoPage', () => {
  let component: RegistroPasteurizadoPage;
  let fixture: ComponentFixture<RegistroPasteurizadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPasteurizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
