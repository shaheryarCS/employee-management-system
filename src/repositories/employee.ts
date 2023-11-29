import { Employee } from "../models";
import { ResponseType } from "../utility/response";


class EmployeeRepository {
    /**
     * add
     */
    public async addInBulk(employees: any) {
        // let employee = new Employee(order);
        let response;
        Employee.insertMany(employees)
            .then((res) => {
                response = {
                    status: ResponseType.SUCCESS,
                    data: res,
                    message: "creating employees successfully"
                }
            })
            .catch((error) => {
                console.log("Error while creating employees")

                response = {
                    status: ResponseType.FAILURE,
                    data: null,
                    message: "Error while creating employees"
                }
            });
            console.log("=========response",response);
            
        return response;

    }
    public async get(query:any) {
        try {
            let response = await Employee.aggregate(query);
            console.log("response", response);
            if (response) {
                return {
                    status: ResponseType.SUCCESS,
                    data: response,
                    message: "Record found"
                }
            } else {
                return {
                    status: ResponseType.FAILURE,
                    data: null,
                    message: "no record found"
                }
            }
        } catch (error) {
            console.log("error", error);

        }

    }
}

export default new EmployeeRepository();