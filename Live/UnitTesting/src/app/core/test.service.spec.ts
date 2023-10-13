import { TestService } from "./test.service";

describe('Mijn Super TestService', ()=>{
    let svc:TestService;

    beforeEach(()=>{
        svc = new TestService();
    });


    it('should result in 6', ()=>{
        // Arrange
       
        // Act
        let result = svc.add(2,4);

        // Assert
        expect(result).toBe(6);
    });
});