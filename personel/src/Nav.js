import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav(){
    return(
        <Wrap>
            <Link to="/korea">한국어</Link>
        </Wrap>
    )
}

export default Nav

const Wrap = styled.div`
    position: fixed;
    top: 50px;
    bottom: 0;
    width: 300px;
    background-color: #333;
`;