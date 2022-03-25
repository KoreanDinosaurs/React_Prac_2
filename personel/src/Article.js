import React from "react";
import styled from "styled-components";

function Article(){
    return(
        <Container>
            <Word>강동현</Word>
            <Sound>[]</Sound>
            <Meaning>s</Meaning>
            <Example>ss</Example>
            <Translation>sss</Translation>
        </Container>
    )
}

export default Article;

const Container = styled.div`
    width: 100%;
    border: 2px #333 solid;
    border-radius: 10px;
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

const Word = styled.span`
    font-size: 2em;
`;

const Sound = styled.span`

`;

const Meaning = styled.span`

`;

const Example = styled.span`
    color: blue;
`;

const Translation = styled.span`
    color: blue;
`;