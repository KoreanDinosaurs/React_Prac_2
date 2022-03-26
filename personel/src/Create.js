import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Create() {
    const navigate = useNavigate()
    
    return(
        <Button onClick={()=>{navigate('/detail')}}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 10h-4v-4c0-1.104-.896-2-2-2s-2 .896-2 2l.071 4h-4.071c-1.104 0-2 .896-2 2s.896 2 2 2l4.071-.071-.071 4.071c0 1.104.896 2 2 2s2-.896 2-2v-4.071l4 .071c1.104 0 2-.896 2-2s-.896-2-2-2z"></path>
            </svg>
        </Button>
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
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: .4s ease-in-out;

    &:hover {
        transform: rotate(90deg);
        transition: .4s ease-in-out;
    }
`;

// 명암 주기
// svg 삽입