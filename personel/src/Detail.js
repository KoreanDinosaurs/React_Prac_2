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
            <Wrap>
                <span>단어 추가하기</span>
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
                    <Button onClick={()=>{navigate('/')}} ref={btnRef}>저장하기</Button>
                    <Button onClick={()=>{navigate('/')}}>나가기</Button>
                </BtnWrap>
            </Wrap>
        </Container>
    )
}

export default Detail;

const Container = styled.div`
    float: right;
    width: calc(100vw - 300px);
    height: calc(100vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrap = styled.div`
    /* height: 70%; */
    height: 600px;
    width: 25%;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
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
    margin: 50px 20px 0 20px;
    &:hover {
        background-color: #333;
        color: white;
    }
`;

const BtnWrap = styled.div`
    
`;