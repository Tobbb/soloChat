import React from "react";
import styled from "styled-components";
import { LoginText } from "./parts/LoginText";
import { NameInput } from "./parts/NameInput";
import { LoginButton } from "./parts/LoginButton";

const LoginBlockContaiener= styled.div`
background-color: ${props => props.theme.loginFG};
width: 80%;
height: 30%;
min-height:12em;
display:grid;
padding:5%;
grid-template-rows: repeat(4,1fr);
box-shadow: 2px 3px 25px -5px rgba(0,0,0,0.75);

@media all and (min-width: ${props => props.theme.breakpoints.mobile}) { 
    width:60%;
 }

 @media all and (min-width: ${props => props.theme.breakpoints.tablet}) { 
    width:50%;
 }

 @media all and (min-width: ${props => props.theme.breakpoints.computer}) { 
    width:40%;
 }

`;

export const LoginBlock = () => {
    const [username, setUsername] = React.useState<string>("");

    return (
        <LoginBlockContaiener>
            <LoginText isHeadline={true}>SoloChat</LoginText>
            <LoginText isHeadline={false}>Chat with the coolest cat in town!</LoginText>
            <NameInput onChange={(e)=> setUsername(e.target.value)}/>
            <LoginButton disabled={username.length===0}>Login</LoginButton>
        </LoginBlockContaiener>
    )
}