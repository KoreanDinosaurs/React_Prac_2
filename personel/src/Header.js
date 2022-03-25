import React from "react";
import styled from "styled-components"

function Header(){
    
    return (
        <Bar>
            <span>My Dictionary</span>
        </Bar>
    )
};

export default Header;

const Bar = styled.div`
    height: 50px;
    width: 100vw;
    background-color: #9e9e9e;
    text-align: center;

    & > span {
        font-family: 'Oswald', sans-serif;
        font-size: 2rem;
        line-height: 50px;
        color: #fafafa;
    }  
`;