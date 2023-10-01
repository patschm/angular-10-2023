import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessageService } from "./message-service.service";
import { AppComponent } from "./app.component";
import { By } from "@angular/platform-browser";
import { BaseComponent } from "./base/base-component/base-component.component";
import { SubComponent } from "./sub/sub/sub.component";
import { SubModule } from "./sub/sub.module";
import { BaseModule } from "./base/base-module.module";

describe("AppComponent", ()=>{
    let msgService: MessageService;
    let fixture: ComponentFixture<AppComponent>;
    
    beforeEach(()=>{
        // For integration (component+template+css) use TestBed
        TestBed.configureTestingModule({
            declarations:[AppComponent],
            imports:[SubModule, BaseModule],
            providers:[MessageService]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges() // activates ngOnInit
    });
    it("should have BaseComponent", ()=>{
        let base = fixture.debugElement.query(By.directive(BaseComponent));
        
        expect(base).not.toBeNull();
    });
    it("should have SubComponent ", ()=>{
        let sub = fixture.debugElement.query(By.directive(SubComponent))

        expect(sub).not.toBeNull();
    });

    it("BaseComponent should change SubComponent", ()=>{
        let base = fixture.debugElement.query(By.directive(BaseComponent));
        let sub = fixture.debugElement.query(By.directive(SubComponent));

        let inp = base.query(By.css("input"));
        inp.nativeElement.value = "Hi";
        inp.nativeElement.dispatchEvent(new Event("input"));

        base.query(By.css("button")).nativeElement.dispatchEvent(new Event("click"));
        fixture.detectChanges();
        let li = sub.query(By.css("ul>li"));

        expect(li).not.toBeNull();
        expect(li.nativeElement.lastChild.textContent).toEqual("Hi");
    });
});