import React, { Component } from 'react';

// import Data from './components/HomeComponent';
import Header from './components/HeaderComponent';
import Tagline from './components/TaglineComponent';
import DevRow from './components/DevRowComponents';
import OrgRow from './components/OrgRowComponent';
import CollabRow from './components/CollabRowComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tagline />
        <DevRow />
        <OrgRow />
        <CollabRow />
      </div>
    );
  }
}

export default App;
