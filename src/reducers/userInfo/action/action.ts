import {UserInfoActions} from "./type";

export const SetUserName = (name: string):UserInfoActions => ({
    type:"USER_NAME",
    payload:{
        name
    }
})