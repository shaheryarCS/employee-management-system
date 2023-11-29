import { ResponseType, SEND_RESPONSE } from "../../utility/response";
import { employeeMediator } from "./employee.mediator";


class EmployeeController {
    /**
     * add Employees in bulk
     */
    public async bulkAdd(req: any, res: any) {
        let body = req?.body;
        
        let response : any;
        response = await employeeMediator.addInBulk(body);
        
        SEND_RESPONSE(response, res);

    }
    /**
     * Get employees with respect to All and filter
     */
    public async get(req: any, res: any) {
        let response:any;
        let query = req.query;
        response = await employeeMediator.get(query);
        SEND_RESPONSE(response, res);

    }
}

export const employeeController = new EmployeeController();