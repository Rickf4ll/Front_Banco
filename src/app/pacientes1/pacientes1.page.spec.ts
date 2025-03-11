import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pacientes1Page } from './pacientes1.page';

describe('Pacientes1Page', () => {
  let component: Pacientes1Page;
  let fixture: ComponentFixture<Pacientes1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pacientes1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
