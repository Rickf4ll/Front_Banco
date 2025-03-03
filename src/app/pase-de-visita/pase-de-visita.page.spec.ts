import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaseDeVisitaPage } from './pase-de-visita.page';

describe('PaseDeVisitaPage', () => {
  let component: PaseDeVisitaPage;
  let fixture: ComponentFixture<PaseDeVisitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseDeVisitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
