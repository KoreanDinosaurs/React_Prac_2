import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Article from "./Article";
import Chinese from "./Chinese";
import CreateBtn from "./CreateBtn";
import English from "./English";
import Japanese from "./Japanese";


function Section(){
    return (
        <Container>
            <Routes>
                <Route path="/*" element={<Article/>}/>
                <Route path="/english" element={<English/>}/>
                <Route path="/japanese" element={<Japanese/>}/>
                <Route path="/chinese" element={<Chinese/>}/>
            </Routes>
            {/* <Article /> */}
            <CreateBtn />
        </Container>
    )
}

export default Section;

const Container = styled.div`
    float: right;
    width: calc(100vw - 300px);
    padding: 20px 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
`;