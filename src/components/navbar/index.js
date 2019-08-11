import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#notes">Notes</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;