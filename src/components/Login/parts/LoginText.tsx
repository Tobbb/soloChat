import styled from "styled-components";

type LoginTextProps = {
    isHeadline:boolean;
}

export const LoginText = styled.h1<LoginTextProps>`
color: ${props => props.theme.textLight};
align-self: center;
font-size: ${props => props.isHeadline? "2.5em" : "1.2em"};
font-family: sans-serif;
`;

