import {employeeService}  from "./employee.service";
import {employeeQuery}  from "./employee.query";
import { ResponseType } from "../../utility/response";


class EmployeeMediator{

    public async addInBulk(body:any) {
        let response:any;
        response = await employeeService.addInBulk(body); 
        return response     
    }
    public async get(query:any) {
        let aggregate = employeeQuery.get(query);
        return await employeeService.get(aggregate)       
    }
    public async getSalary() {
        let aggregate = employeeQuery.getSalary();
        return await employeeService.get(aggregate)       
    }
    public async getTopEarners(query:any) {
        let aggregate = employeeQuery.getTopEarners(query);
        return await employeeService.get(aggregate)       
    }
    public async getRetentionRate(query:any) {
        const {employeesWhoLeft,employeesAtStartingPeriod,employeesAtEndingPeriod} = query;
        const num = employeesAtEndingPeriod - employeesWhoLeft;
        const retentationRate = (num / employeesAtStartingPeriod) * 100
        return  {
            status: ResponseType.SUCCESS,
            data: retentationRate,
            message: "Record found"
        }       
    }
}

export const employeeMediator = new EmployeeMediator();