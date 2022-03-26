import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { reviseData } from "./redux/modules/data";

function Revise() {
    const ref = useRef([]), btnRef = useRef(), url = useParams(), navigate = useNavigate(), dispatch= useDispatch();
    const dict_list = useSelector(state => state.data.list)
   
    useEffect(() => {
        ref.current[0].value = dict_list[url.idx].word
        ref.current[1].value = dict_list[url.idx].sound
        ref.current[2].value = dict_list[url.idx].meaning
        ref.current[3].value = dict_list[url.idx].example
        ref.current[4].value = dict_list[url.idx].translation
        // key값을 배열로 하면 문자가 돼서 작동을 안함,,,
        
        btnRef.current.addEventListener("click", revise);
    })

    const revise = () => {
        const data = ref.current.map(v => v.value)
        const info = {
            word: data[0],
            sound: data[1],
            meaning: data[2],
            example: data[3],
            translation: data[4],
            completed: 0,
        }
        dispatch(reviseData(info,url.idx))
    }

    return(
        <Container>
            <Wrap>
                <span>단어 수정하기</span>
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
                <Button onClick={()=>{navigate('/')}} ref={btnRef}>저장하기</Button>
            </Wrap>
        </Container>
    )
}

export default Revise;

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
    margin-top: 50px;
    width: 100px;
    height: 35px;
    border: none;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 10px;
    background-color: #e0e0e0;

    &:hover {
        background-color: #333;
        color: white;
    }
`;