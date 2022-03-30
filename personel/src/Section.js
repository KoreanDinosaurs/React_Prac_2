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
            <CreateBtn />
        </Container>
    )
}

export default Section;

const Container = styled.div`
    float: right;
    width: calc(100vw - 300px);
    padding: 40px 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        width: 100vw;
        margin-top: 60px;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 40px 60px;
    }
    
    @media screen and (max-width: 480px) {
        float: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        /* margin-top: 30px; */
    }
`;