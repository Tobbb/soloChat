import { MessageType, MessageStackActions } from "./action/type";





export type MessageStackState = {
    messages: MessageType[]
}

export const initialState: MessageStackState = {
    messages:[]
}

export const MessageStackReducer = (state = initialState, action: MessageStackActions ) => {
    switch(action.type){
        case "ADD_MESSAGE_TO_STACK":
            const tempMessages = state.messages;
            tempMessages.push(action.payload.message);
            return{
                ...state,
                messages: tempMessages

            }
        case "CLEAR_STACK": 
        return{
            ...state,
            messages: []
        }
        default: return state;
        
    }
    
}