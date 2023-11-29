import { Response } from "express"

export const ResponseType = {
    SUCCESS:200,
    FAILURE:400
}

export const SEND_RESPONSE = (data:any,res: Response)=>{
  res.send(data);
}