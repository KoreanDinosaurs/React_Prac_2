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
    
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.3em;
    font-weight: bold;
    width: 100%;
    /* height: 50px; */
    padding: 40px 30px;

    &:hover, :focus {
        background-color: #cdcccc;
        color: #333;
        /* font-weight: bold; */
    }
`;
