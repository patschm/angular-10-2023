import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { By } from "@angular/platform-browser";
import { MainComponent } from "./core/main/main.component";
import { CoreModule } from "./core/core.module";
import { RouterModule } from "@angular/router";


describe("AppComponent", ()=>{
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        imports:[CoreModule, RouterModule]
      });
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    
    it ('should have app-main', ()=>{
      let main = fixture.debugElement.query(By.directive(MainComponent));
      expect(main).toBeTruthy();
    });
});