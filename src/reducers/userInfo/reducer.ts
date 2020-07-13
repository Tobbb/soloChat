import {UserInfoActions} from "./action/type";

export type UserInfoState = {
    name: string;
}

export const InitialState = {
    name: ""
}


export const UserInfoReducer = (state = InitialState, action:UserInfoActions )  => {
    switch(action.type){
        case "USER_NAME":
            return{
                ...state,
                name:action.payload.name
            }
        default: return state;
        
    }
}