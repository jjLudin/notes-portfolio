import React, { Component } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Harry</td>
                  <td>Potter</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>John</td>
                  <td>Picard</td>
                  <td>@me</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Billy</td>
                  <td>Bob</td>
                  <td>@spider</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Notes;