import React from "react";
import styled from "styled-components";
import Article from "./Article";

function Section(){
    return (
        <Container>
            <Article />
        </Container>
    )
}

export default Section;

const Container = styled.div`
    float: right;
    width: calc(100vw - 300px);
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`;