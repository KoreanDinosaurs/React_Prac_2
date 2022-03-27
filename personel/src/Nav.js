import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav(){
    return(
        <Wrap>
            <StyledLink to="/*">All Language</StyledLink>
            <StyledLink to="/chinese">Chinese</StyledLink>
            <StyledLink to="/english">English</StyledLink>
            <StyledLink to="/japanese">Japanese</StyledLink>
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
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 30px;
`;
