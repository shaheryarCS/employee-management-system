import { Employee } from "../models";
import { ResponseType } from "../utility/response";


class EmployeeRepository {
    /**
     * add
     */
    public async addInBulk(employees: any) {
        let response:any;
        Employee.insertMany(employees)
            .then((res) => {
                response = {
                    status: ResponseType.SUCCESS,
                    data: res,
                    message: "creating employees successfully"
                }
            })
            .catch((error) => {
                console.log("error",error)

                response = {
                    status: ResponseType.FAILURE,
                    data: null,
                    message: "Error while creating employees"
                }
            });
            
        return response;

    }
    public async get(query:any) {
        try {
            let response = await Employee.aggregate(query);
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
            return {
                status: ResponseType.FAILURE,
                data: null,
                message: "Internal Error occurred"
            }
        }

    }
}

export default new EmployeeRepository();