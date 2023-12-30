import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcaiPage } from './acai.page';

describe('AcaiPage', () => {
  let component: AcaiPage;
  let fixture: ComponentFixture<AcaiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AcaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
