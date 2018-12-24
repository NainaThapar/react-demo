import React, { Component } from 'react';
import Products from './Components/products/products';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products></Products>
      </div>
    );
  }
}

export default App;