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
    width: 100%;
    padding: 20px 20px 20px 320px;
    border: 1px red solid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`;