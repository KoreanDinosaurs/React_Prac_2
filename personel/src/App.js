import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Nav from './Nav';
import Section from './Section';
import {Route, Routes} from "react-router-dom"
import Detail from './Detail';
import Revise from './Revise';

function App() {
  return (
    <>
        <Header />
        <Wrap>
            <Nav/>
            <Routes>
                <Route path="/" element={<Section />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="/revise/:idx" element={<Revise />} />
            </Routes> 
        </Wrap> 
    </>
  );
}

export default App;

const Wrap = styled.div`
    padding-top: 50px; 
`;
