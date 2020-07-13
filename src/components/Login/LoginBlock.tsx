import React from "react";
import styled from "styled-components";

const LoginBlockContaiener= styled.div`
background-color: ${props => props.theme.loginFG};
width: 80%;
height: 40%;
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
    return (
        <LoginBlockContaiener>123</LoginBlockContaiener>
    )
}