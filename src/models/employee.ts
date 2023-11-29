import {model,Schema,Types} from 'mongoose';


const EmployeeModel = new Schema({
    id:{type:Number},
    name:{type:String},
    position:{type:String},
    salary:{type:Number},
    joiningDate:{type:Date},
    
});

export const Employee = model('employee',EmployeeModel)