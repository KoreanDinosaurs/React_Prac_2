import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Nav(){
    const [currentClick, setCurrentClick] = useState('link1')
    const [prevClick, setPrevClick] = useState(null)

    React.useEffect(()=>{
        if(currentClick){
            const current = document.getElementById(currentClick);
            current.style.color = "#333"
            current.style.background = "#cdcccc"
        }

        if(prevClick){
            const current = document.getElementById(prevClick);
            current.style.color = "white"
            current.style.background = "#333"
        }

        setPrevClick(currentClick)

    }, [currentClick])

    const click = (e) => {
        setCurrentClick(e.target.id)
    }    

    return(
        <Wrap>
            <StyledLink onClick={click} id="link1" to="/*">All Language</StyledLink>
            <StyledLink onClick={click} id="link2" to="/chinese">Chinese</StyledLink>
            <StyledLink onClick={click} id="link3" to="/english">English</StyledLink>
            <StyledLink onClick={click} id="link4" to="/japanese">Japanese</StyledLink>
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

    @media screen and (max-width: 1200px) {
        position: static;
        height: 60px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
    }  
    
    @media screen and (max-width: 480px) {
        position: static;
        height: 240px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
    }
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    font-weight: bold;
    width: 100%;
    padding: 40px 30px;

    &:hover, :focus {
        background-color: #cdcccc;
        color: #333;
    }

    @media screen and (max-width: 1200px) {
        padding: 0;
        text-align: center;
        line-height: 60px;
    }

    @media screen and (max-width: 480px) {
        
    }
`;
