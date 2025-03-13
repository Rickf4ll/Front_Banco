import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAutologaPage } from './registroautologa.page';

describe('RegistroAutologaPage', () => {
  let component: RegistroAutologaPage;
  let fixture: ComponentFixture<RegistroAutologaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAutologaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
