import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Contact name="Jhon Doe" email="jhon@gmail.com" phone="(32)11111-1111"/>
        </div>
      </div>
    );
  }
}

export default App;
