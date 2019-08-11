import React, { Component } from 'react';
import { Container, Row, ListGroup } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <br></br>
        <Container>
          <Row>
            <h1>Contact</h1>
          </Row>

          <Row>
            <p className="text-left">
              Let's connect!
            </p>
          </Row>

          <Row>
            <ListGroup className="text-left">
              <ListGroup.Item>Email: blarg@blarg.com</ListGroup.Item>
              <ListGroup.Item>LinkedIn: LinkGoesHere</ListGroup.Item>
            </ListGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;