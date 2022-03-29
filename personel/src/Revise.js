import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { updateDataFB } from "./redux/modules/data";

function Revise() {
    const ref = useRef([]), btnRef = useRef(), url = useParams(), navigate = useNavigate(), dispatch= useDispatch();
    const dict_list = useSelector(state => state.data.list)
    console.log(url)
    useEffect(() => {
        const dict = dict_list.filter(v => v.id === url.id)[0]
        ref.current[0].value = dict.word
        ref.current[1].value = dict.sound
        ref.current[2].value = dict.meaning
        ref.current[3].value = dict.example
        ref.current[4].value = dict.translation
        // key값을 배열로 하면 문자가 돼서 작동을 안함,,,
        
        btnRef.current.addEventListener("click", revise);
    }, [])

    const revise = () => {
        const data = ref.current.map(v => v.value)

        const key = ['단어', '발음', '의미', '예문', '해석']
        
        for(let i = 0; i < data.length; i++){
            if(!data[i]) return window.alert(`'${key[i]}' 영역이 작성되지 않았습니다`)
        }

        const info = {
            word: data[0],
            sound: data[1],
            meaning: data[2],
            example: data[3],
            translation: data[4],
        }
        dispatch(updateDataFB(info, url.id))
        navigate(-1)
    }

    return(
        <Container>
            <Wrap>
                <span>단어 수정하기</span>
                <Item>
                <label htmlFor="word">단어</label>
                <Input id="word" ref={el => (ref.current[0] = el)} />
                </Item>
                <Item>
                <label htmlFor="sound">발음</label>
                <Input id="sound" ref={el => (ref.current[1] = el)} />
                </Item>
                <Item>
                <label htmlFor="meaning">의미</label>
                <Input id="meaning" ref={el => (ref.current[2] = el)} />
                </Item>
                <Item>
                <label htmlFor="example">예문</label>
                <Input id="example" ref={el => (ref.current[3] = el)} />
                </Item>
                <Item>
                <label htmlFor="trans">해석</label>
                <Input id="trans" ref={el => (ref.current[4] = el)} />
                </Item>
                <BtnWrap>
                    <Button ref={btnRef}>저장하기</Button>
                    <Button onClick={()=>{navigate(-1)}}>나가기</Button>
                </BtnWrap>
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
    width: 100px;
    height: 35px;
    border: none;
    font-size: 1.2em;
    font-weight: bold;
    border-radius: 10px;
    margin: 50px 20px 0 20px;
    background-color: #e0e0e0;

    &:hover {
        background-color: #333;
        color: white;
    }
`;

const BtnWrap = styled.div`   
`;