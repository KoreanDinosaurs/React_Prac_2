import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Nav from './Nav';
import Section from './Section';
import {Route, Routes} from "react-router-dom"
import Detail from './Detail';

function App() {
  return (
    <>
        <Header />
        <Wrap>
            <Nav/>
            <Routes>
                <Route path="/" element={<Section />} />
                <Route path="/detail" element={<Detail />} />
            </Routes> 
        </Wrap> 
    </>
  );
}

export default App;

const Wrap = styled.div`
    padding-top: 50px; 
`;
