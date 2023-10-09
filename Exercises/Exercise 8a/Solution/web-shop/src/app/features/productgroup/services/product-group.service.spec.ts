import { of } from 'rxjs';
import { ProductGroup } from 'src/app/core/entities';
import { ProductgroupService } from './product-group.service';

const dummyData:ProductGroup[] = [{'id': 1, 'name': 'Laptops en notebooks', 'image': 'laptops_en_notebooks.png'}, {'id': 6, 'name': 'DVD-spelers', 'image': 'dvd_spelers.png'}];

// TODO: 1. Create a unit test for ProductGroupService
describe('ProductGroupService', () => {
  // TODO: 1a create a spy for HttpClient
  // - command: get
  // - status: 200
  // - data: dummyData
  const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
  
  beforeEach(() => { 
    httpSpy.get.and.returnValue(of({
      status:200,
      data:dummyData
    }));
  });

  // TODO: 1b. Test if the get method of the spy is called and the result is a productgroup
  it('should return one productgroup', () => {
    const pgService = new ProductgroupService({apiEndpoint:''}, httpSpy);
    let pg = pgService.productgroup(1);
    expect(httpSpy.get).toHaveBeenCalled()
    expect(pg).toBeTruthy();
  });

  // TODO: 1c. Test if the service returns tw productgroups
  it('should return two productgroups', () => {
    const pgService = new ProductgroupService({apiEndpoint:''}, httpSpy);
    pgService.productgroups$.subscribe(data=>{
      expect(data).toHaveSize(2);
    });  
  });
  
});
