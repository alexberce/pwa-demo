import React, { Component } from 'react';
import './App.css';
import Header from "./Screens/Header/Header";
import Content from "./Screens/Content/Content";
import Offline from "./Components/Notifications/Offline/Offline";
import { Link, withRouter } from "react-router-dom";

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

export default withRouter(App);
