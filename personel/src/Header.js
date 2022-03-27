import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"

function Header(){
    const navigate = useNavigate()
    return (
        <Bar>
            <span onClick={()=>{navigate('/')}}>My Dictionary</span>
        </Bar>
    )
};

export default Header;

const Bar = styled.div`
    text-align: center;
    position: fixed;
    height: 50px;
    width: 100vw;
    background-color: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
    padding-left: 20px;

    & > span {
        font-family: 'Oswald', sans-serif;
        font-size: 2rem;
        line-height: 50px;
        cursor: pointer;
    }
`;