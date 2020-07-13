import React from "react";
import styled from "styled-components";

export const ChatInput= styled.textarea`
resize:none;
font-size: 1.2em;
font-family: sans-serif;
outline: thin;
`;

export const ChatButton= styled.button`
font-size: 1.5em;
font-family: sans-serif;
`;

export const InputContainer = styled.div`
display:grid;
grid-template-columns: 5fr 1fr;
`;

export const ChatInputGroup = () => {
const [message, setMessage] = React.useState<string>("");
return(
    <InputContainer>        
    <ChatInput onChange={(e) => setMessage(e.target.value)} placeholder={"Type your message"} value={message}/>

        <ChatButton>
            Send
        </ChatButton>
    </InputContainer>
)
}


