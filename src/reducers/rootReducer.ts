import { combineReducers } from "redux";
import { UserInfoState, UserInfoReducer } from "./userInfo/reducer";

export type stateTypes = {
    userInfo: UserInfoState
}
export const rootReducer = combineReducers({
    userInfo: UserInfoReducer
})