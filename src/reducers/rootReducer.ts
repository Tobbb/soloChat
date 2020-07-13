import { combineReducers } from "redux";
import { UserInfoState, UserInfoReducer } from "./userInfo/reducer";
import { MessageStackReducer, MessageStackState } from "./MessageStack/reducer";

export type stateTypes = {
    userInfo: UserInfoState;
    messageStack:MessageStackState;
}
export const rootReducer = combineReducers({
    messageStack: MessageStackReducer,
    userInfo: UserInfoReducer
})