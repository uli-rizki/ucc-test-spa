import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import Vehicle from './components/Vehicle';

class App extends Component {

  render() { 
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">{' '}
            Vehicles
          </Navbar.Brand>
        </Navbar> 
        <br />
        <Container>
          <Vehicle />
        </Container>
      </React.Fragment>
     );
  }
}
 
export default App;