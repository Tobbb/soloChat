import React from "react";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { Login } from "./Login/Login";
import { connect } from "react-redux";
import { stateTypes } from "../reducers/rootReducer";
import { ChatContainer } from "./Chat/Chat";

const PageContainer = styled.div`
display:grid;
grid-template-rows: 5fr 100fr;
height:100vh;
`;

type MainProps = {
    loggedIn:boolean;
}

export const MainContainer = (props: MainProps) => {

    return(
        <PageContainer>
           <Header/>
           {props.loggedIn?
           <ChatContainer/>
           :
           <ChatContainer/>
           }
           
        </PageContainer>
    )
}
const mapStateToProps= ({userInfo}:stateTypes) => ({
    loggedIn: userInfo.name.length>0?true:false
})

export const Main =  connect(mapStateToProps)(MainContainer)