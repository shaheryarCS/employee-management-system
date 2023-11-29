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
    /**
     * Get avg salay per depart
     */
    public async getSalary(req: any, res: any) {
        let response:any;
        response = await employeeMediator.getSalary();
        SEND_RESPONSE(response, res);

    }
   /**
     * Get "N" Top Earners 
     */
    public async getTopEarners(req: any, res: any) {
        let response:any;
        let query = req.query;
        response = await employeeMediator.getTopEarners(query);
        SEND_RESPONSE(response, res);

    }
   /**
     * Get Retention Rate of employees
     */
    public async getRetentionRate(req: any, res: any) {
        let response:any;
        let query = req.query;
        response = await employeeMediator.getRetentionRate(query);
        SEND_RESPONSE(response, res);

    }
    
}

export const employeeController = new EmployeeController();