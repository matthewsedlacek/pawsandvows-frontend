// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
// import BookingPage from './components/BookingPage';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/booking" element={<BookingPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const Container = styled.div`
  font-family: 'Helvetica', sans-serif;
  text-align: center;
  background-color: #F5F5F5;
  color: #333;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eae8e3;
  padding: 40px 20px;
  border-radius: 10px;
  margin: 20px 0;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #A9A9A9;
  margin: 0;
`;

const Description = styled.p`
  color: #333;
  font-size: 1.2em;
  margin: 10px 0 20px;
`;

const Button = styled.button`
  background-color: #FFC1CC;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF69B4;
  }
`;

const Section = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 10px;
`;

function App() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Paws and Vows Logo" />
        <Title>Paws and Vows</Title>
        <Description>Wedding day dog care for your furry friends.</Description>
        <Button>Contact Us</Button>
      </Header>
      <Section>
        <p>Additional content can go here...</p>
      </Section>
      <Footer>
        <Button>Contact Us</Button>
      </Footer>
    </Container>
  );
}

export default App;