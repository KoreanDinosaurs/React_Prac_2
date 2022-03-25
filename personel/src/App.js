import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Nav from './Nav';
import Section from './Section';


function App() {
  return (
    <Container>
        <Header />
        <Wrap>
            <Nav/>
            <Section/>
        </Wrap>   
    </Container>
  );
}

export default App;

const Container = styled.div`
    height: 2000px;
`;

const Wrap = styled.div`
    padding-top: 50px; 
`;
