import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <Router>
        <Fragment>
          <NavBar></NavBar>
          <Route path="/" exact component={Home}></Route>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;