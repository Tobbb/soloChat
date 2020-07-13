import React, { Dispatch } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { MessageStackActions, MessageType } from "../../../reducers/MessageStack/action/type";
import { AddMessageToStack } from "../../../reducers/MessageStack/action/action";
import { stateTypes } from "../../../reducers/rootReducer";

export const ChatInput= styled.textarea`
resize:none;
font-size: 1.2em;
font-family: sans-serif;
outline: thin;
`;

export const ChatButton= styled.button`
font-size: 1.5em;
font-family: sans-serif;
`;

export const InputContainer = styled.div`
display:grid;
grid-template-columns: 5fr 1fr;
`;

type ChatInputProps = {
    onSubmitMessage: (message: MessageType ) => void;
    name: string;
}


export const ChatInputGroup = (props: ChatInputProps) => {
const [message, setMessage] = React.useState<string>("");
const handleSubmit = () => {
    if(message.length>0){
        const dispatchMessage: MessageType = {
            time:new Date(),
            message:message,
            sender: props.name
        }
        props.onSubmitMessage(dispatchMessage);
        setMessage("");
    }
}
return(
    <InputContainer>        
    <ChatInput onChange={(e) => setMessage(e.target.value)} placeholder={"Type your message"} value={message}/>

        <ChatButton onClick={handleSubmit} disabled={message.length===0}>
            Send
        </ChatButton>
    </InputContainer>
)
}
const mapStateToProps = ({userInfo}:stateTypes) => ({
    name: userInfo.name
})

const mapDispatchToProps = (dispatch: Dispatch<MessageStackActions>) => ({
    onSubmitMessage: (message: MessageType )=> dispatch(AddMessageToStack(message))
});
export const ChatInputControl = connect(mapStateToProps,mapDispatchToProps)(ChatInputGroup);

