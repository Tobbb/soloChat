import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
display:grid;
grid-template-rows: 5fr 100fr;
height:100vh;
`;

export const MainContainer = () => {

    return(
        <PageContainer>
           <div>1</div>
           <div>2</div>
        </PageContainer>
    )
}