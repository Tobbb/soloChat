import React from "react";
import styled from "styled-components";

const Container = styled.div`
background-color: ${props => props.theme.chatMessages};
border: 2px solid ${props => props.theme.chatMessagesBorder};
`;

export const DisplayContainer = () => {
    return(
<Container>

</Container>
    )
}