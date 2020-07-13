import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { stateTypes } from "../../../reducers/rootReducer";
import { MessageType } from "../../../reducers/MessageStack/action/type";

const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow:hidden;
`;

const Container = styled.div`
background-color: ${props => props.theme.chatMessages};
border: 2px solid ${props => props.theme.chatMessagesBorder};
flex:1;
overflow:scroll;
`;
const MessageRow = styled.div`
padding:2%;
flex-direction:column;
display: flex;
`;

const MessageText = styled.p`
font-family:sans-serif;
font-size: 1.2em;
`;

const TimeText = styled.p`
font-family:sans-serif;
font-size: .6em;
font-weight: 100;
font-style: italic;
`;

type DisplayContainerProps = {
    messages: MessageType[];
    len: number;
}
const DisplayContainer = (props: DisplayContainerProps) => {
console.log(props);

   return(
       <OuterContainer>
          <MessageText>Messages: {props.messages.length}</MessageText> 
<Container>
    {props.messages.map((message: MessageType) =>(
        <MessageRow key={message.time.toDateString()}>
            <MessageText>{message.message}
            </MessageText>
            <TimeText>{message.time.toISOString()}</TimeText>
        
        </MessageRow>
    ))}
</Container>
</OuterContainer>
    )
}
const mapStateToProps =({messageStack}:stateTypes) => ({
       messages: messageStack.messages,
       len:messageStack.messages.length
        }
       );



export const ChatDisplay = connect(mapStateToProps)(DisplayContainer);