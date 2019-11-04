import React from 'react';
import './App.css';
import Container from './components/Container';
import Signup from './components/Signup';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Signup />
      </Container>
    </div>
  );
}

export default App;
