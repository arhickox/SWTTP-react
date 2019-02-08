import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
import Species from './pages/species-index';
import Navbar from "./components/navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/species" component={Species} />
        </div>
      </Router>
    );
  }
}

export default App;
