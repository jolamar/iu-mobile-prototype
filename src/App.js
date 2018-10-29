import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import { AppHeader, Avatar, Toolbar } from './components';

// Pages
import { Campus, Classes, Help, Home, Settings } from './pages'

// Routing
import { BrowserRouter as Router, Link } from "react-router-dom";


class App extends Component {

  render() {
    const path = window.location.pathname
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''

    return <Router basename={basepath}>

      <React.Fragment>


        <AppHeader campus="Bloomington">
          <Avatar url="https://www.fillmurray.com/g/150/150" alt="Plceholder of Bill Murray" />
        </AppHeader>

        <div className="rvt-m-tabs">
          <div className="rvt-m-tabs__tablist" role="tablist" aria-label="Rivet tabs">
            <Link className="rvt-m-tabs__tab" role="tab" aria-selected={path === basepath + '/'} data-tab="tab-1" id="t-one" tabIndex="-1" to="/">Home</Link>
            <Link className="rvt-m-tabs__tab" role="tab" aria-selected={path === basepath + '/classes'} data-tab="tab-2" id="t-two" tabIndex="-1" to="/classes">Classes</Link>
            <Link className="rvt-m-tabs__tab" role="tab" aria-selected={path === basepath + '/campus'} data-tab="tab-3" id="t-three" tabIndex="-1" to="/campus">Campus</Link>
            <Link className="rvt-m-tabs__tab" role="tab" aria-selected={path === basepath + '/help'} data-tab="tab-4" id="t-four" tabIndex="-1" to="/help">Help</Link>
            <Link className="rvt-m-tabs__tab" role="tab" aria-selected={path === basepath + '/settings'} data-tab="tab-5" id="t-five" tabIndex="-1" to="/settings">Settings</Link>
          </div>

          <Home />

          <Classes />

          <Campus />

          <Help />

          <Settings />

        </div>

        <Toolbar />
      </React.Fragment>
    </Router>;
  }
}

export default App;
