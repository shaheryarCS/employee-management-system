import {Request,Response, NextFunction } from "express";
import { httpVaribales } from "../../utility";
import Joi from "joi";

export const employeeValidate = (schema:any,propertyName:string)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        /* Agenda : Validate API parameters
           If validation succeed: move to next middleware
           If validate fais: return with error
        */

        //get property using "propertyName" from "req" 
        const property = req[propertyName as keyof httpVaribales];
        //validate the property or parameters using JOI validate method
        const {error} = schema.validate(property);
        //chech if error null
        const valid = error == null
        //if error null then move to next middle ware
        
        if (valid) {
            next();
        } else {
            return res.status(400).json({
                error
            });
        }
    }
}