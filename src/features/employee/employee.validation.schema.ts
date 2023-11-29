import joi from "joi";

export const employeeSchema = {
    employeeGet:joi.object().keys({
        skip: joi.string().allow(null),
        limit: joi.string().allow(null),
        minimumExp: joi.string().allow(null),
        maximumExp: joi.string().allow(null),
        minimumSalary: joi.string().allow(null),
        maximumSalary: joi.string().allow(null),
    }),
    employeePost:joi.array().items(
        joi.object().keys({
            id: joi.number().required(),
            name: joi.string().required(),
            position: joi.string().required(),
            salary: joi.number().required(),
            joiningDate: joi.string().required(),
        })
    )
} 