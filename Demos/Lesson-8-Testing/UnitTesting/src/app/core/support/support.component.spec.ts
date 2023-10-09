import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportComponent } from './support.component';
import { By } from '@angular/platform-browser';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportComponent]
    });
    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it ('should have header Support', ()=>{
    let h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toContain('Support');
  });
});
