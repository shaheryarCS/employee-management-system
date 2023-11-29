import {ResponseType,SEND_RESPONSE}  from "../../utility/response";
import employeeRepo from "../../repositories/employee"


class EmployeeService{

    public async addInBulk(employees:any) {
        return await employeeRepo.addInBulk(employees);
    }
    public async get(query:any) {
        return await employeeRepo.get(query);
    }
}

export const employeeService = new EmployeeService();