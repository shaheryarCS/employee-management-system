import { ResponseType, SEND_RESPONSE } from "../../utility/response";
import { employeeMediator } from "./employee.mediator";


class EmployeeController {
    /**
     * add
     */
    public async bulkAdd(req: any, res: any) {
        let body = req?.body;
        
        let response : any;
        response = await employeeMediator.addInBulk(body);
        console.log("response",response);
        
        SEND_RESPONSE(response, res);

    }
    public async get(req: any, res: any) {
        let response:any;
        let query = req.query;
        response = await employeeMediator.get(query);
        SEND_RESPONSE(response, res);

    }
}

export const employeeController = new EmployeeController();