import React from 'react';
import './App.css';
import { Navbar, Container } from 'react-bootstrap';

import Form from './components/Form';

let App = () => {
  
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/"> Test </Navbar.Brand>
        </Container>
      </Navbar>

      <Form />

    </>
  );
}

export default App;
