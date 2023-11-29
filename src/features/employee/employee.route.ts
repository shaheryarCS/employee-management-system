import { Router } from "express";
import { employeeValidate } from "./employee.validation";
import { employeeSchema } from "./employee.validation.schema";
import {employeeController}  from "./employee.controller";


export const employeeRoute = Router();

//Add employees in bulk
employeeRoute.post('/add_in_bulk',employeeValidate(employeeSchema.employeePost,"body"),(req,res)=>{ employeeController.bulkAdd(req,res)});
//Get all or filtered employees
employeeRoute.get('/',employeeValidate(employeeSchema.employeeGet,"query"),(req,res)=>{ employeeController.get(req,res)});
//Get avaerge salary for each department
employeeRoute.get('/get_avaerge_salary_per_depart',employeeValidate(employeeSchema.employeeGet,"query"),(req,res)=>{ employeeController.getSalary(req,res)});
//Get top earners
employeeRoute.get('/get_top_earners',employeeValidate(employeeSchema.getTopEarners,"query"),(req,res)=>{ employeeController.getTopEarners(req,res)});
//Get employee retention rate
employeeRoute.get('/employee_retention_rate',employeeValidate(employeeSchema.getRetentionRate,"query"),(req,res)=>{ employeeController.getRetentionRate(req,res)});

