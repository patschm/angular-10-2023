import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../core.module';
import { Router } from '@angular/router';

// TODO: Route Test
describe('MainComponent', () => {
  let component: MainComponent;
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent],
      imports: [RouterTestingModule.withRoutes(routes)]
    });
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(MainComponent);
    router.initialNavigation();
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Route', () => {
    it('should "" navigate to "Home"', fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/home');
    }));
    it('should "/home" navigate to "Home"', fakeAsync(() => {
      router.navigate(['/home']);
      tick();
      expect(location.path()).toBe('/home');
    }));
    it('should "/chat" navigate to "Chat"', fakeAsync(() => {
      router.navigate(['/chat']);
      tick();
      expect(location.path()).toBe('/chat');
    }));
    it('should "/support" navigate to "Support"', fakeAsync(() => {
      router.navigate(['/support']);
      tick();
      expect(location.path()).toBe('/support');
    }));
  });
});
