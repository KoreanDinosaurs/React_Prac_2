import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteData, updateData } from "./redux/modules/data";

function Japanese(){
    const dict_list = useSelector(state => state.data.list).filter(v => v.language === 'ja')

    const dispatch = useDispatch()
    
    const click_btn = (e) => {
        const idx = e.target.dataset.id
        dispatch(updateData(idx)) 
    }

    const click_cancle = (e) => {
        const idx = e.target.dataset.id
        dispatch(deleteData(idx))
    }

    return(
        <>
            {dict_list.map((v,i) => {
                const completeNum = dict_list[i].completed
                return(
                    <Container num={completeNum} key={i}>
                        <Word num={completeNum}>{v.word}</Word>
                        <Sound num={completeNum}>[{v.sound}]</Sound>
                        <Meaning num={completeNum}>{v.meaning}</Meaning>
                        <Example num={completeNum}>{v.example}</Example>
                        <Translation num={completeNum}>{v.translation}</Translation>
                        <Wrap num={completeNum}>
                            <button onClick={click_btn} data-id={i}> 
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1.0em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 20c-.801 0-1.555-.312-2.121-.879l-4-4c-.567-.566-.879-1.32-.879-2.121s.312-1.555.879-2.122c1.133-1.133 3.109-1.133 4.242 0l1.188 1.188 3.069-5.523c.526-.952 1.533-1.544 2.624-1.544.507 0 1.012.131 1.456.378.7.39 1.206 1.028 1.427 1.798.221.771.127 1.581-.263 2.282l-5 9c-.454.818-1.279 1.384-2.206 1.514-.139.019-.277.029-.416.029zm-4-8c-.268 0-.518.104-.707.293s-.293.439-.293.707.104.518.293.707l4 4c.223.221.523.33.844.283.312-.043.586-.232.737-.504l5-9c.13-.233.161-.503.088-.76-.073-.257-.243-.47-.478-.6-.473-.264-1.101-.078-1.357.388l-4.357 7.841-3.062-3.062c-.19-.189-.44-.293-.708-.293z"></path>
                                </svg>
                            </button>
                            <Link to={"/revise/" + i}>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" completed="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z"></path>
                                </svg>
                            </Link>
                            <button onClick={click_cancle} data-id={i}>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" completed="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.414 6.586c-.78-.781-2.048-.781-2.828 0l-2.586 2.586-2.586-2.586c-.78-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l2.585 2.586-2.585 2.586c-.781.781-.781 2.047 0 2.828.39.391.902.586 1.414.586s1.024-.195 1.414-.586l2.586-2.586 2.586 2.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828l-2.585-2.586 2.585-2.586c.781-.781.781-2.047 0-2.828z"></path>
                            </svg>
                            </button>
                        </Wrap>
                    </Container>
                )
            })}
        </>
    )
}

export default Japanese;

const Container = styled.div`
    position: relative;
    width: 100%;
    border: 2px #333 solid;
    border-radius: 10px;
    background-color: ${props => props.num ? "#333" : "white"};
    padding: 1em;
    display: flex;
    flex-direction: column;
`;

const Word = styled.span`
    font-size: 2em;
    font-weight: bold;
    color: ${props => props.num ? "white" : "black"};
`;

const Sound = styled.span`
    color: ${props => props.num ? "white" : "black"};
    margin-left: 0.2em;
`;

const Meaning = styled.span`
    color: ${props => props.num ? "white" : "black"};
    margin-left: 0.2em;
`;

const Example = styled.span`
    color: ${props => props.num ? "white" : "#004d40"};
    margin-left: 0.2em;
    font-weight: bold;
`;

const Translation = styled.span`
    color: ${props => props.num ? "white" : "#004d40"};
    margin-left: 0.2em;
    font-weight: bold;
`;

const Wrap = styled.div`
    position: absolute;
    right: 1em;
    font-size: 1em;
    display: flex;
    justify-content: space-around;
    
    svg {
        margin: 0 2px;
        color: ${props => props.num ? "white" : "black"};
        pointer-events: none; 
        font-size: 24px;
    }

    & > button {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;
