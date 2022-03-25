import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Nav from './Nav';


function App() {
  return (
    <Container>
        <Header />
        <Nav/>
    </Container>
  );
}

export default App;

const Container = styled.div`
    height: 2000px;
`;
