import React, { Component } from 'react';

// import Data from './components/HomeComponent';
import Header from './components/HeaderComponent';
import HomePage from './components/HomeComponents';
import Footer from './components/FooterComponent';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <HomePage />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
