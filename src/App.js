import React, { Component } from 'react';
import './App.css';
import Header from "./Screens/Header/Header";
import Content from "./Screens/Content/Content";
import Offline from "./Components/Notifications/Offline/Offline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Offline />
        <Header />
        <Content/>
      </div>
    );
  }
}

export default App;