import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LechesDisponiblesPage } from './lechesdisponibles.page';

describe('LechesDisponiblesPage', () => {
  let component: LechesDisponiblesPage;
  let fixture: ComponentFixture<LechesDisponiblesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LechesDisponiblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
