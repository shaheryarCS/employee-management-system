import {employeeService}  from "./employee.service";
import {employeeQuery}  from "./employee.query";


class EmployeeMediator{
    /**
     * add
     */
    public async addInBulk(body:any) {
        let response:any;
        response = await employeeService.addInBulk(body); 
        return response     
    }
    public async get(query:any) {
        let aggregate = employeeQuery.get(query);
        return await employeeService.get(aggregate)       
    }
}

export const employeeMediator = new EmployeeMediator();