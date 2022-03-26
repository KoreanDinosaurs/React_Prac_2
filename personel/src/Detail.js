import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { createData } from "./redux/modules/data";
import { useNavigate } from "react-router-dom";
function Detail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const ref = useRef([])
    const btnRef = useRef()
    
    useEffect(()=>{
        btnRef.current.addEventListener("click", saveData);

        // return () =>  btnRef.current.removeEventListener("click", saveData)
    })

    const saveData = () => {
        const data = ref.current.map(v => v.value)
        const info = {
            word: data[0],
            sound: data[1],
            meaning: data[2],
            example: data[3],
            translation: data[4],
            completed: 0,
        }
        dispatch(createData(info))
    }

    return(
        <Container>
            <label>단어</label>
            <Input ref={el => (ref.current[0] = el)} placeholder="단어를 입력해주세요."/>
            <label>발음</label>
            <Input ref={el => (ref.current[1] = el)} placeholder="발음을 입력해주세요."/>
            <label>의미</label>
            <Input ref={el => (ref.current[2] = el)} placeholder="의미를 입력해주세요."/>
            <label>예문</label>
            <Input ref={el => (ref.current[3] = el)} placeholder="예문을 입력해주세요."/>
            <label>해석</label>
            <Input ref={el => (ref.current[4] = el)} placeholder="해석을 입력해주세요."/>
            <Button onClick={()=>{navigate('/')}} ref={btnRef}>저장하기</Button>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    float: right;
    width: calc(100vw - 300px);
    height: calc(100vh - 50px);
    padding: 20px;
    border: 1px red solid;
`;

const Input = styled.input`
    width: 300px;
    height: 30px;
    border: none;
    border-bottom: 1px solid black;
    background-color:transparent;

    &:focus, &:hover {
        outline: none;
        border-bottom: 2px solid black;
    }
`;

const Button = styled.button`
    width: 100px;
`;