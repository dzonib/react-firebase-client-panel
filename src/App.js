import React, {Component} from 'react';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar/>
          <div className="container">
            <h1>Hello</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;