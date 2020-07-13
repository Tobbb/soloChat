import React from "react";
import styled from "styled-components";
import { LoginBlock } from "../../components/Login/LoginBlock";

const LoginContainer = styled.div`
background-color: ${props => props.theme.loginBG};
justify-content: center;
display:flex;
padding-top: 30%;
`;

export const Login = () =>{
    return (
        <LoginContainer>
            <LoginBlock/>
        </LoginContainer>
    )
}