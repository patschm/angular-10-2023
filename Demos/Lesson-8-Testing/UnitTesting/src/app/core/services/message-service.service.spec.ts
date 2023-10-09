import { MessageService } from "./message-service.service";
// TODO: Unit Test
describe('MessageService with 3 items', ()=>{
    let svc: MessageService;

    beforeEach(()=>{
        svc = new MessageService();
        svc.send("Hello 1");
        svc.send("Hello 2");
        svc.send("Hello 3");
    });

    describe("send one", ()=>{
        it("should be 4", ()=>{
            svc.send("Hello 4");

            svc.messages$.subscribe(state=>{
                expect(state.length).toBe(4);
            })
        });
    });
    describe("delete one", ()=>{
        it("should be 2", ()=>{      
            svc.delete("Hello 2");

            svc.messages$.subscribe(state=>{
                expect(state.length).toBe(2);
        })
        });
    })
});