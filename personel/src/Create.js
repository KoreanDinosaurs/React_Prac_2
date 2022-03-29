import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createDataFB } from "./redux/modules/data";
import { useNavigate } from "react-router-dom";

function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const ref = useRef([]);
    const btnRef = useRef();

    const [currentClick, setCurrentClick] = useState(null);
    const [prevClick, setPrevClick] = useState(null);

    useEffect(()=>{
        if(currentClick){
            let current = document.getElementById(currentClick);
            current.style.color = "white";
            current.style.background = "#333";
        }
        
        if(prevClick){
            let prev = document.getElementById(prevClick);
            prev.style.color = "black";
            prev.style.background = "transparent";
        }
        setPrevClick(currentClick);
    }, [currentClick])

    const click = (e) => {
        setCurrentClick(e.target.id) 
    }
 
    const addData = () => {
        const data = ref.current.map(v => v.value)
        const key = ['단어', '발음', '의미', '예문', '해석']
        
        for(let i = 0; i < data.length; i++){
            if(!data[i]) return window.alert(`'${key[i]}' 영역이 작성되지 않았습니다`)
        }

        if(!currentClick) return window.alert('언어의 종류가 선택되지 않았습니다.')

        const info = {
            language: currentClick,
            word: data[0],
            sound: data[1],
            meaning: data[2],
            example: data[3],
            translation: data[4],
            completed: 0,
        }
        
        dispatch(createDataFB(info));
        navigate(-1);
    }

    return(
        <Container>
            <Wrap>
                <span>단어 추가하기</span>
                <BtnWrap2 className="langBtn">
                    <button onClick={click} id="en">영어</button>
                    <button onClick={click} id="cn">중국어</button>
                    <button onClick={click} id="ja">일본어</button>
                </BtnWrap2>
                <Item>
                <label>단어</label>
                <Input ref={el => (ref.current[0] = el)} />
                </Item>
                <Item>
                <label>발음</label>
                <Input ref={el => (ref.current[1] = el)} />
                </Item>
                <Item>
                <label>의미</label>
                <Input ref={el => (ref.current[2] = el)} />
                </Item>
                <Item>
                <label>예문</label>
                <Input ref={el => (ref.current[3] = el)} />
                </Item>
                <Item>
                <label>해석</label>
                <Input ref={el => (ref.current[4] = el)} />
                </Item>
                <BtnWrap>
                    <Button onClick={addData} ref={btnRef}>저장하기</Button>
                    <Button onClick={()=>{navigate(-1)}}>나가기</Button>
                </BtnWrap>
            </Wrap>
        </Container>
    )
}

export default Create;

const Container = styled.div`
    float: right;
    width: calc(100vw - 300px);
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrap = styled.div`
    height: 600px;
    width: 25%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    border-radius: 10px;
    background-color: white;

    span {
        font-size: 1.5em;
        font-weight: bold;
    }
`;

const Item = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 15px;

    label {
        position: absolute;
    }
`;

const Input = styled.input`
    height: 40px;
    width: 80%;
    margin-top: 25px;
    font-size:1.2em;
    border: none;
    border-bottom: 1px solid black;
    background-color:transparent;

    &:focus, :hover {
        outline: none;
        border-bottom: 2px solid black;
    }
`;

const Button = styled.button`
    width: 100px;
    height: 35px;
    border: none;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 10px;
    background-color: #e0e0e0;
    margin: 25px 20px 0 20px;
    &:hover {
        background-color: #333;
        color: white;
    }
`;

const BtnWrap = styled.div`  
`;

const BtnWrap2 = styled.div`
    & > button {
        margin: 20px 10px 0 10px;
        font-size: 1em;
        border-radius: 10px;
        border: 1px solid gray;
        padding: 2px 5px;
        cursor: pointer;
        background-color: transparent;
    }

    & > button:hover {
        color: white;
        background-color: #333;
    }
`;