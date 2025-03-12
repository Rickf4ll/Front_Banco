import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcuraPage } from './procura.page';

describe('ProcuraPage', () => {
  let component: ProcuraPage;
  let fixture: ComponentFixture<ProcuraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
