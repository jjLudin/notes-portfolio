import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './components/home';
import Notes from './components/notes';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <HashRouter>
          <NavBar></NavBar>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/notes" component={Notes}></Route>
          <Route path="/contact" component={Contact}></Route>
      </HashRouter>
    </div>
  );
}

export default App;