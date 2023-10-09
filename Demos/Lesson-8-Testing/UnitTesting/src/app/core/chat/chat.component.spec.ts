import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComponent } from './chat.component';
import { BaseModule } from 'src/app/base/base-module.module';
import { SubModule } from 'src/app/sub/sub.module';
import { MessageService } from '../services/message-service.service';
import { By } from '@angular/platform-browser';
import { BaseComponent } from 'src/app/base/base-component/base-component.component';
import { SubComponent } from 'src/app/sub/sub/sub.component';


// TODO: Integration
// TODO: Code Coverage: ng test --no-watch --code-coverage
describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;


  beforeEach(() => {
    // For integration (component+template+css) use TestBed
    TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [SubModule, BaseModule],
      providers: [MessageService]
    }).compileComponents();
    fixture = TestBed.createComponent(ChatComponent);
    fixture.detectChanges() // activates ngOnInit
  });
  it("should have BaseComponent", () => {
    let base = fixture.debugElement.query(By.directive(BaseComponent));

    expect(base).not.toBeNull();
  });
  it("should have SubComponent ", () => {
    let sub = fixture.debugElement.query(By.directive(SubComponent))

    expect(sub).not.toBeNull();
  });

  it("BaseComponent should change SubComponent", () => {
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
