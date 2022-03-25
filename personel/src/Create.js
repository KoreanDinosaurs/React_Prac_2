import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Create() {
    const navigate = useNavigate()
    
    return(
        <Button onClick={()=>{navigate('/detail')}}/>
    )
}

export default Create;

const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #333;
    border: none;
    cursor: pointer;
`;

// 명암 주기
// svg 삽입