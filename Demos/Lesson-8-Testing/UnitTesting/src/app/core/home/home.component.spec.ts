import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [HomeComponent]
      });
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    
    it ('should have header Home', ()=>{
      let h1 = fixture.debugElement.query(By.css('h1'));
      expect(h1.nativeElement.textContent).toContain('Home');
    });
});
