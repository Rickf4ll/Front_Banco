import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuHistorialClinicoPage } from './menu-historial-clinico.page';

describe('MenuHistorialClinicoPage', () => {
  let component: MenuHistorialClinicoPage;
  let fixture: ComponentFixture<MenuHistorialClinicoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHistorialClinicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
