import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Article from "./Article";
import Create from "./Create";
import Korea from "./Korea";

function Section(){
    return (
        <Container>
            <Routes>
                <Route path="/*" element={<Article/>}/>
                <Route path="/korea" element={<Korea/>}/>
            </Routes>
            {/* <Article /> */}
            <Create />
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