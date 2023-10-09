import { of } from "rxjs";
import { SubComponent } from "./sub.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { MessageService } from "src/app/core/services/message-service.service";
// TODO: SpyObject
describe("SubComponent", ()=>{
    let msgService: MessageService;
    let fixture: ComponentFixture<SubComponent>;
    
    beforeEach(()=>{
        msgService = jasmine.createSpyObj<MessageService>(["messages$", "delete"]);
        // spyOnProperty is the common approach but doesn't work in this case because messages$ is read only!
        // spyOnProperty(msgService, "messages$", "get").and.returnValue(of(["Hello 1", "Hello 2", "Hello 3"]));
        // To put it differently. TypeScript transpiler doesn't allow you to set read only properties. This is
        // because only a getter is defined in the MessageService class. So lets fool the transpiler by treating
        // the MessageService object as an any object.
        (msgService as any).messages$ = of(["Hello 1", "Hello 2", "Hello 3"]);

        // For integration (component+template+css) use TestBed
        TestBed.configureTestingModule({
            declarations:[SubComponent],
            providers:[{provide:MessageService, useValue:msgService}]
        }).compileComponents();
        fixture = TestBed.createComponent(SubComponent);
        fixture.detectChanges() // activates ngOnInit
    });

    it("messages$ should have 3 elements", ()=>{
        let component = new SubComponent(msgService);
        component.ngOnInit();
        component.messages$.subscribe(lst=>{
            expect(lst.length).toBe(3);
        });
    });
    it("should have 3 li's", ()=>{
        const lis = fixture.debugElement.queryAll(By.css('li'));
        expect(lis.length).toBe(3);
    });
    it("should call MessageService delete()", ()=>{
        const button = fixture.debugElement.query(By.css('li>button'));
        button.triggerEventHandler("click");
        expect(msgService.delete).toHaveBeenCalled();
    });
    describe("SubComponent with MessageService", ()=>{
        let fixture: ComponentFixture<SubComponent>;
        let testbed: TestBed;

        beforeEach(()=>{
            // Cannot override default TestBed. Create a new one.
            testbed = new TestBed();
            testbed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
            testbed.configureTestingModule({
                providers:[MessageService],
                declarations:[SubComponent]
            }).compileComponents();
            
            fixture = testbed.createComponent(SubComponent);
            const msgSvc = fixture.debugElement.injector.get(MessageService);
            msgSvc.send("Hello 1");
            msgSvc.send("Hello 2");
            msgSvc.send("Hello 3");
            fixture.detectChanges(); // ngOnInit
        });
        it("should have 3 li's", ()=>{
            const lis = fixture.debugElement.queryAll(By.css('li'));
            expect(lis.length).toBe(3);
        });
        it("should have 2 li's after delete", ()=>{
            const btn = fixture.debugElement.query(By.css('li>button'));
            btn.triggerEventHandler("click");
            fixture.detectChanges();
            const lis = fixture.debugElement.queryAll(By.css('li'));
            expect(lis.length).toBe(2);
        });
    });
});

