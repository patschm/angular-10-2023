import { ProductGroup } from "src/app/core/entities";


const dummyData:ProductGroup[] = [{'id': 1, 'name': 'Laptops en notebooks', 'image': 'laptops_en_notebooks.png'}, {'id': 6, 'name': 'DVD-spelers', 'image': 'dvd_spelers.png'}];

// TODO: 2. Create integration tests for ProductgroupListComponent
describe('ProductGroupListComponent', ()=>{
  // TODO: 2a. Create a spy for the ProductgroupService
  // method: productgroup
  // property: productgroups$ which returns dummyData
  
  // TODO: 2b. Create a spy for Redux Store.
  // method: dispatch
  
  // TODO: 2c. Declare a fixture variable for ProductgroupListComponent
  

  beforeEach(()=>{
    // TODO: 2d. Configure the TestBed (Hint: Also use RouterTestingModule)
  
  });

  it('should show two productgroups', ()=>{
    // TODO: 2e. Test if 2 productgroups are shown
   
  });

  it('should call store\'s dispatch', ()=>{
    // TODO: 2f. Test if the dispatch method is called on a productgroup selection
   
  });
});