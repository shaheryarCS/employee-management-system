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

export const testJOI = (schema1:any,propertyName:string)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        /* Agenda : Validate API parameters
           If validation succeed: move to next middleware
           If validate fais: return with error
        */

        //get property using "propertyName" from "req" 
        const property = req[propertyName as keyof httpVaribales];
        //validate the property or parameters using JOI validate method
        const {error1} = schema1.validate(property);
        //chech if error null
        const valid = error1 == null
        //if error null then move to next middle ware

        // Define schema
        const schema = Joi.object({
            name : Joi.string(),
            age : Joi.number()
        })
        // create test object
        const testObject = {
            name: "abc",
            age:"abc"
        };
        // validate "testObject" using Joi
        const { error,value } = schema.validate(testObject);
        
        console.log("error",error);
        /* 
        error [Error [ValidationError]: "age" must be a number] {
            _original: { name: 'abc', age: 'abc' },
            details: [
                {
                message: '"age" must be a number',
                path: [Array],
                type: 'number.base',
                context: [Object]
                }
            ]
            }
         */
        if (valid) {
            next();
        } else {
            return res.status(400).json({
                error
            });
        }
    }
}

// const Joi =  require('joi');
// const schema = Joi.object({
//     name : Joi.string(),
//     age : Joi.number()
// })

// const testObject = {
//     name: "abc",
//     age:20
// }
// const { error } = schema.validate(testObject);

// console.log("error",error)