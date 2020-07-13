import React from "react";
import styled from "styled-components";
import { ChatInputGroup } from "./Insert/InputField";
import { DisplayContainer } from "./Display/ChatDisplay";

const ChatWindowContainer= styled.div`
background-color: ${props => props.theme.chatFG};
width: 80%;
height: 70%;
display:grid;
padding:5%;
grid-template-rows: 10fr 2fr;
box-shadow: 2px 3px 15px -5px rgba(0,0,0,0.75);
justify-self:center;

@media all and (min-width: ${props => props.theme.breakpoints.mobile}) { 
    width:70%;
 }

 @media all and (min-width: ${props => props.theme.breakpoints.tablet}) { 
    width:60%;
 }

 @media all and (min-width: ${props => props.theme.breakpoints.computer}) { 
    width:50%;
 }

`;



export const ChatWindow= () => {
    return(
<ChatWindowContainer>
        <DisplayContainer/>
        <ChatInputGroup/>
</ChatWindowContainer>
    )
}