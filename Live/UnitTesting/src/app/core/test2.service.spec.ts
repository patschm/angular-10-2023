import { TestService } from "./test.service";
import { Test2Service } from "./test2.service";

describe('Mijn Super Test2Service', ()=>{
    let svc:Test2Service;
    let t1 = jasmine.createSpyObj<TestService>(['add'], {result:21});

    beforeEach(()=>{
        //let t1 = new TestService();
        //jasmine.createSpy('TestService', add=>20);
        t1.add.and.returnValue(6);

        
        svc = new Test2Service(t1);
    });


    it('should call add', ()=>{
        // Arrange
       
        // Act
        svc.addToo(2,4);

        // Assert
        expect(t1.add).toHaveBeenCalled();
    });
});