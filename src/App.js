import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import { AppHeader, Avatar, Toolbar, SubHeader } from './components';

// Main nav and tab content
import Tabs from './components/Tabs'

// Sub pages
import {Bus, CrimsonCard, Food, Labs, Locations, LocationDetail, Parking} from './pages'

// Routing
import {BrowserRouter as Router, Route} from "react-router-dom";

const subpages = ['/bus', '/labs', '/locations', '/locationDetail', '/card', '/parking', '/food']
const subpageTitles = ['Bus', 'Labs', 'Locations', 'Location Detail', 'Crimson Card', 'Parking', 'Food']

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchOpen: false
    }
    this.toggleSearch = this.toggleSearch.bind(this)
  }

  toggleSearch() {
    this.setState({searchOpen: !this.state.searchOpen})
  }

  render() {
    const path = window.location.pathname
    const urlIndex = subpages.indexOf(path)

    return <Router>
      <React.Fragment>
        {urlIndex === -1 &&
          <React.Fragment>
            <AppHeader searchOpen={this.state.searchOpen} campus="Bloomington">
              <Avatar url="https://www.fillmurray.com/g/150/150" alt="Plceholder of Bill Murray"/>
            </AppHeader>

            <Route path="/" render={() =>
              <Tabs searchOpen={this.state.searchOpen} toggleSearch={this.toggleSearch} />
            } />
          </React.Fragment>
        }

        {urlIndex !== -1 &&
          <SubHeader title={subpageTitles[urlIndex]} />
        }

        <Route path={"/bus"} component={Bus} />
        <Route path={"/card"} component={CrimsonCard} />
        <Route path={"/parking"} component={Parking} />
        <Route path={"/labs"} component={Labs} />
        <Route path={"/locations"} component={Locations} />
        <Route path={"/locationDetail"} component={LocationDetail} />
        <Route path={"/food"} component={Food} />


        {!this.state.searchOpen &&
          <Toolbar searchOpen={this.state.searchOpen} toggleSearch={this.toggleSearch}/>
        }
      </React.Fragment>
    </Router>;
  }
}

export default App;
