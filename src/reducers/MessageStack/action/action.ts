import {MessageStackActions, MessageType} from "./type";

export const AddMessageToStack = (message: MessageType ): MessageStackActions => ({
    type: "ADD_MESSAGE_TO_STACK",
    payload: {
        message
    }
})

export const ClearStack = (): MessageStackActions => ({
    type:"CLEAR_STACK"
})