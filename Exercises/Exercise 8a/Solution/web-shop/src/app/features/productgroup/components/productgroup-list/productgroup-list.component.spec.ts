import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ProductGroup } from "src/app/core/entities";
import { ProductgroupService } from "../../services/product-group.service";
import { By } from "@angular/platform-browser";
import { Store } from "@ngrx/store";
import { ProductgroupListComponent } from "./productgroup-list.component";
import { RouterTestingModule } from "@angular/router/testing";

const dummyData:ProductGroup[] = [{'id': 1, 'name': 'Laptops en notebooks', 'image': 'laptops_en_notebooks.png'}, {'id': 6, 'name': 'DVD-spelers', 'image': 'dvd_spelers.png'}];

// TODO: 2. Create integration tests for ProductgroupListComponent
describe('ProductGroupListComponent', ()=>{
  // TODO: 2a. Create a spy for the ProductgroupService
  // method: productgroup
  // property: productgroups$ which returns dummyData
  const productGroupServiceSpy = jasmine.createSpyObj<ProductgroupService>(
    ['productgroup'], 
    {productgroups$:of(dummyData)});
  // TODO: 2b. Create a spy for Redux Store.
  // method: dispatch
  const storeSpy = jasmine.createSpyObj<Store>(['dispatch']);
  // TODO: 2c. Declare a fixture variable for ProductgroupListComponent
  let pglComponent: ComponentFixture<ProductgroupListComponent>;

  beforeEach(()=>{
    // TODO: 2d. Configure the TestBed
    TestBed.configureTestingModule({
      declarations:[ProductgroupListComponent],
      imports:[RouterTestingModule],
      providers:[
        { provide:ProductgroupService, useValue:productGroupServiceSpy},
        { provide: Store, useValue:storeSpy}]
    });
    
    TestBed.compileComponents();
    pglComponent = TestBed.createComponent(ProductgroupListComponent);
  });

  it('should show two productgroups', ()=>{
    // TODO: 2e. Test if 2 productgroups are shown
    pglComponent.detectChanges();
    let anchors = pglComponent.debugElement.queryAll(By.css('a[role=button]'));
    expect(anchors).toHaveSize(2);
  });

  it('should call store\'s dispatch', ()=>{
    // TODO: 2f. Test if the dispatch method is called on a productgroup selection
    pglComponent.detectChanges();
    pglComponent.nativeElement.querySelector('a[role=button]').click();
    expect(storeSpy.dispatch).toHaveBeenCalled();
  });
});