import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import { AppHeader, Avatar, Toolbar, SubHeader } from './components';

// Main nav and tab content
import Tabs from './components/Tabs'

// Sub pages
<<<<<<< HEAD
import { Bus, Labs, Food } from './pages'
=======
import {Bus, CrimsonCard, Labs, Locations, Parking} from './pages'
>>>>>>> bce19da7f1b5b5711142097990a37a3ce81503bd

// Routing
import {BrowserRouter as Router, Route} from "react-router-dom";

<<<<<<< HEAD
const subpages = ['/bus', '/labs', "/locations", "/food"]
const subpageTitles = ['Bus', 'Labs', 'Locations', 'Food']
=======
const subpages = ['/bus', '/labs', '/locations', '/card', '/parking', '/food']
const subpageTitles = ['Bus', 'Labs', 'Locations', 'Crimson Card', 'Parking', 'Food']
>>>>>>> bce19da7f1b5b5711142097990a37a3ce81503bd


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
        <Route path={"/food"} component={Food} />


        {!this.state.searchOpen &&
          <Toolbar searchOpen={this.state.searchOpen} toggleSearch={this.toggleSearch}/>
        }
      </React.Fragment>
    </Router>;
  }
}

export default App;
