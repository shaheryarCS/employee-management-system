import {initializeApp,cert} from 'firebase-admin/app';
import {getMessaging} from 'firebase-admin/messaging';

let serviceAccount = require( '../config/push-notification-80894-firebase-adminsdk-hanr9-aa66b574ce.json')

const admin = initializeApp({
    credential:cert(serviceAccount),
});

export const sendNotification = (token:string)=>{
    getMessaging(admin).send({
        data:{
            title:"abcb",
            body:""
        },
        token
    }).then((data)=>{
        console.log(data);
        
    })
}
