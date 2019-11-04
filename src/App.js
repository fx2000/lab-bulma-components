import React from 'react';
import './App.css';
import Container from './components/Container';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Message from './components/Message';


function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Signup />
        <Message isDanger title="Sign Up Offline">
          Sorry about that
        </Message>
      </Container>
    </div>
  );
}

export default App;
