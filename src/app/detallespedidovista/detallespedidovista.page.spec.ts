import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallespedidovistaPage } from './detallespedidovista.page';

describe('DetallespedidovistaPage', () => {
  let component: DetallespedidovistaPage;
  let fixture: ComponentFixture<DetallespedidovistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallespedidovistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
