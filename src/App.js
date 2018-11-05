import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import { AppHeader, Avatar, Toolbar } from './components';

// Main nav and tab content
import Tabs from './components/Tabs'

// Sub pages
import { Bus, Labs } from './pages'

// Routing
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Locations } from './pages/Locations';

const subpages = ['/bus', '/labs', "/locations"]


class App extends Component {
  render() {
    const path = window.location.pathname

    return <Router>
      <React.Fragment>
        {subpages.indexOf(path) === -1 &&
          <React.Fragment>
            <AppHeader campus="Bloomington">
              <Avatar url="https://www.fillmurray.com/g/150/150" alt="Plceholder of Bill Murray"/>
            </AppHeader>

            <Route path="/" component={Tabs} />
          </React.Fragment>
        }

        <Route path={"/bus"} component={Bus} />
        <Route path={"/labs"} component={Labs} />
        <Route path={"/locations"} component={Locations} />
        <Toolbar />
      </React.Fragment>
    </Router>;
  }
}

export default App;
