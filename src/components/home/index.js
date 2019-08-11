import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Jumbotron>
          <h1>Welcome!</h1>
          <p>
            The purpose of this website is to post my notes which were helpful
            to me and will hopefully be helpful to you.
          </p>
          <p><i>
            Disclaimer: These are informal summaries, which may include direct
            quotes not specifically identified by quotation marks. These unattributed
            quotations are cited in so far as the article from which they were drawn
            is clearly identified at the beginning of each summary.
          </i></p>
          <p>
            <Button variant="primary" href="#notes">My Notes</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;