import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Nav from './Nav';
import Section from './Section';
import {Route, Routes} from "react-router-dom"
import Create from './Create';
import Revise from './Revise';
import {db} from "./firebase"
import React from 'react';
import { loadDataFB } from './redux/modules/data';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(loadDataFB())
  }, [])
 
  return (
    <>
        <Header/>
        <Wrap>
            <Nav/>
            <Routes>
                <Route path="/*" element={<Section />} />
                <Route path="/detail" element={<Create />} />
                <Route path="/revise/:id" element={<Revise />} />
            </Routes>  
        </Wrap> 
    </>
  );
}

export default App;

const Wrap = styled.div`
    padding-top: 50px; 
`;
