import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { stateTypes } from "../../../reducers/rootReducer";
import { MessageType } from "../../../reducers/MessageStack/action/type";

const Container = styled.div`
background-color: ${props => props.theme.chatMessages};
border: 2px solid ${props => props.theme.chatMessagesBorder};
`;

type DisplayContainerProps = {
    messages: MessageType[];
}
const DisplayContainer = (props: DisplayContainerProps) => {
console.log(props);

   return(
<Container>
{props.messages.length}
</Container>
    )
}
const mapStateToProps =({messageStack}:stateTypes) => {
    return({
       messages: messageStack.messages
    })
}



export const ChatDisplay = connect(mapStateToProps)(DisplayContainer);