import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import { AppHeader, Avatar, Toolbar } from './components';

// Pages
import { Campus, Classes, Help, Home, Settings } from './pages'

class App extends Component {

  render() {
    return <React.Fragment>

        <AppHeader campus="Bloomington">
          <Avatar url="https://www.fillmurray.com/g/150/150" alt="Plceholder of Bill Murray" />
        </AppHeader>

        <div className="rvt-m-tabs">
          <div className="rvt-m-tabs__tablist" role="tablist" aria-label="Rivet tabs">
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="true" data-tab="tab-1" id="t-one">
              Home
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-2" id="t-two" tabIndex="-1">
              Classes
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-3" id="t-three" tabIndex="-1">
              Campus
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-4" id="t-four" tabIndex="-1">
              Help
              <span className="rvt-badge rvt-badge--success rvt-m-left-xxs">1</span>
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-5" id="t-five" tabIndex="-1">
              Settings
            </button>
          </div>

          <Home />

          <Classes />

          <Campus />

          <Help />

          <Settings />

        </div>

        <Toolbar />
      </React.Fragment>;
  }
}

export default App;
