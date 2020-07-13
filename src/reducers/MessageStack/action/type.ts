const ADD_MESSAGE_TO_STACK = "ADD_MESSAGE_TO_STACK";
const CLEAR_STACK = "CLEAR_STACK";

export type MessageType= {
    message:string;
    time: Date;
    sender: string;
}

interface AddActionToStack {
    type: typeof ADD_MESSAGE_TO_STACK,
    payload: {
        message: MessageType
    }
}

interface ClearStack {
    type: typeof CLEAR_STACK
}

export type MessageStackActions = AddActionToStack | ClearStack;