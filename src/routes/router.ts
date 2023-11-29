import { Router } from "express";
import { employeeRoute } from "../features";

export const appRoute = Router();
console.log("export const appRoute = Router()");

appRoute.use('/employee',employeeRoute);