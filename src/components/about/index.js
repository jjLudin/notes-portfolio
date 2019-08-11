import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div className="About">
        <br></br>
        <Container>
          <Row>
            <h1>About</h1>
          </Row>

          <Row>
            <p className="text-left">
              Here is some information about me.
            </p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;