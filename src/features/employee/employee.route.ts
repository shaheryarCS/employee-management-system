import { Router,Request,Response,NextFunction } from "express";
import { employeeValidate, testJOI } from "./employee.validation";
import { employeeSchema } from "./employee.validation.schema";
import {employeeController}  from "./employee.controller";


export const employeeRoute = Router();

employeeRoute.post('/add_in_bulk',employeeValidate(employeeSchema.employeePost,"body"),(req,res)=>{ employeeController.bulkAdd(req,res)});
employeeRoute.get('/',employeeValidate(employeeSchema.employeeGet,"query"),(req,res)=>{ employeeController.get(req,res)})

// employeeRoute.get('/testjoi',testJOI(employeeSchema.employeePost,"query"),(req:Request,res:Response,next:NextFunction)=>{
//     res.send('JOI validation passed');    
// });

// orderRoute.get('/',orderValidate(orderSchema.orderPost,"query"),(req,res)=>{
//     // res.json();
//     res.send('JOI validation passed');
//     sendNotification('cfSTzwVE9sQiuwyjgWE1pN:APA91bHSLzxDX6uH3kzfE6p7FoT2wgi8SEDdCWAYvZpjSrluxr8_ewVjB2EmkeDxn5-WX4QWA62RY_2V464TJ_nokMtzpKiVX5KwlUjqubextMLOQF4LqOdcb_lq6UXaq9pYbxKPUCKM');
    
// })

