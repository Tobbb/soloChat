import React from "react";
import styled from "styled-components";
import { Header } from "./Header/Header";
import { Login } from "./Login/Login";

const PageContainer = styled.div`
display:grid;
grid-template-rows: 5fr 100fr;
height:100vh;
`;

export const MainContainer = () => {

    return(
        <PageContainer>
           <Header/>
           <Login/>
        </PageContainer>
    )
}