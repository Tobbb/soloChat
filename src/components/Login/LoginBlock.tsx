import React, { Dispatch } from "react";
import styled from "styled-components";
import { LoginText } from "./parts/LoginText";
import { NameInput } from "./parts/NameInput";
import { LoginButton } from "./parts/LoginButton";
import { connect } from "react-redux";
import { UserInfoActions } from "../../reducers/userInfo/action/type";
import { SetUserName } from "../../reducers/userInfo/action/action";

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

type LoginContainerProps = {
    onLogin: (name:string) => void;
}


const LoginContainer = (props:LoginContainerProps ) => {
    const [username, setUsername] = React.useState<string>("");
    const handleLogin = () => {
        if(username.length>0){
            props.onLogin(username);
        }
    }
    return (
        <LoginBlockContaiener>
            <LoginText isHeadline={true}>SoloChat</LoginText>
            <LoginText isHeadline={false}>Chat with the coolest cat in town!</LoginText>
            <NameInput placeholder="Whats your name?"  onChange={(e)=> setUsername(e.target.value)}/>
            <LoginButton disabled={username.length===0} onClick={handleLogin}>Login</LoginButton>
        </LoginBlockContaiener>
    )
}

const mapDispatchToProps = (dispatch: Dispatch<UserInfoActions>) => ({
    onLogin: (name:string)=>dispatch(SetUserName(name))
})

export const LoginBlock = connect(undefined,mapDispatchToProps)(LoginContainer)