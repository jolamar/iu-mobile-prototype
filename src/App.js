import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import { AppHeader, Avatar, Toolbar } from './components';

import Tabs from './components/Tabs'

// Routing
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
  render() {
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''
    return <Router basename={basepath}>

      <React.Fragment>
        <AppHeader campus="Bloomington">
          <Avatar url="https://www.fillmurray.com/g/150/150" alt="Plceholder of Bill Murray" />
        </AppHeader>
        <Tabs />
        <Toolbar />
      </React.Fragment>
    </Router>;
  }
}

export default App;
