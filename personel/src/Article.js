import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Article(){
    const dict_list = useSelector(state => state.data.list)
    console.log(dict_list)
    return(
        <>
            {dict_list.map((v,i) => {
                return(
                    <Container key={i}>
                        <Word>{v.word}</Word>
                        <Sound>[{v.sound}]</Sound>
                        <Meaning>{v.meaning}</Meaning>
                        <Example>{v.example}</Example>
                        <Translation>{v.translation}</Translation>
                    </Container>
                )
            })}
        </>
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