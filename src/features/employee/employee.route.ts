import { Router } from "express";
import { employeeValidate } from "./employee.validation";
import { employeeSchema } from "./employee.validation.schema";
import {employeeController}  from "./employee.controller";


export const employeeRoute = Router();

employeeRoute.post('/add_in_bulk',employeeValidate(employeeSchema.employeePost,"body"),(req,res)=>{ employeeController.bulkAdd(req,res)});
employeeRoute.get('/',employeeValidate(employeeSchema.employeeGet,"query"),(req,res)=>{ employeeController.get(req,res)})

