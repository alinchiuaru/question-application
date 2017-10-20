import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Question from './containers/Question';
import Answers from './containers/Answers';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <Question />
        <Answers />
      </div>
    );
  }
}

export default App;
