import React, { Component } from 'react';
import { Container, Row, Table, Form, Button } from 'react-bootstrap';
import notes from './notes';

class Notes extends Component {
  render() {
    return(
      <div className="Notes">
        <br></br>
        <Container>
          <Row>
            <h1>Notes</h1>
          </Row>

          <Row>
            <p className="text-left">
              Things I'm missing are listed at the bottom of the page. If
              you can't find what you seek, and it's in an edited volume, try
              both the name of the author and the name of the editor. I was
              inconsistent in my classifications.
            </p>
          </Row>

          <Row>
            <Form inline>
              <Form.Control type="text" placeholder="Search" className="mr-sm-2"/>
              <Button variant="outline-success">Search</Button>
            </Form>
          </Row>

          <br></br>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Author</th>
                  <th>Year</th>
                  <th>Title</th>
                </tr>
              </thead>
              <tbody>
                {notes.map(this.renderNote)}
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }

  renderNote(note, index) {
    return(
      <tr key={index}>
        <td>{note.author}</td>
        <td>{note.year}</td>
        <td><a href={note.link}>{note.title}</a></td>
      </tr>
    );
  }
}

export default Notes;