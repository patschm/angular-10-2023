import { BaseComponent } from "./base-component.component";
import { TestBed, ComponentFixture, tick, fakeAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MessageService } from "src/app/core/services/message-service.service";
// TODO: Async


describe("BaseComponent", () => {
    let component: BaseComponent;
    let msgService: MessageService;

    beforeEach(() => {
        msgService = jasmine.createSpyObj(["send"]);
        component = new BaseComponent(msgService);
    });

    describe("send", () => {
        it("should call MessageService.send()", () => {
            component.onSend("Hello");

            expect(msgService.send).toHaveBeenCalled()
        });
    });

    describe("input", () => {
        let fixture: ComponentFixture<BaseComponent>;
        let input: HTMLInputElement;

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [BaseComponent],
                imports: [FormsModule],
                providers: [{ provide: MessageService, useValue: msgService }]
            }).compileComponents(); // compileComponents reads templateUrl and StyleUrls
            fixture = TestBed.createComponent(BaseComponent);
            input = fixture.debugElement.query(By.css("input")).nativeElement;
            fixture.detectChanges(); // Calls the ngOnInit()
        });
        it("should change the message field", fakeAsync(() => {
            input.value = "Hi";
            input.dispatchEvent(new Event("input"));
            fixture.detectChanges(); // Updates view and initializes data binding
            tick(10);
            fixture.whenStable();
            expect(fixture.componentInstance.message).toEqual("Hi");
        }));
        it("should change h1 element", fakeAsync(async () => {
            input.value = "Hi";
            input.dispatchEvent(new Event("input"));
            fixture.detectChanges(); // Updates view and initializes data binding
            await fixture.whenStable();
            const h1: HTMLHeadingElement = fixture.debugElement.query(By.css("h1")).nativeElement;
            expect(h1.textContent).toContain("Hi");

        }));
    });
    it("should tick demo", fakeAsync(() => {
        const p = new Promise((resolve, reject) =>
            setTimeout(() => resolve(`I'm the promise result`), 1000)
        );
        tick(2000);
        p.then(result =>
            console.log(result)
        );
    }));
});