import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import {AppHeader, Avatar, SubHeader} from './components';

// Main nav and tab content
import Tabs from './components/Tabs'

// Sub pages
import {Bus, BusLive, CrimsonCard, Food, Labs, Locations, Parking, Settings} from './pages'

// Routing
import {BrowserRouter as Router, Route} from "react-router-dom";

import {BusSchedule} from "./pages/BusSchedule";
import {IconMagnifyingGlass} from "./icons";

const subpages = ['/bus', '/labs', '/locations', '/card', '/parking', '/food', '/settings']
const subpageTitles = ['Bus', 'Labs', 'Locations', 'Crimson Card', 'Parking', 'Food', 'Settings']

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

  componentDidMount() {
  }

  render() {
    const path = window.location.pathname
    const urlIndex = subpages.indexOf(path)

    const subpage = subpages.find(page => {
      return path.includes(page)
    })

    return <Router>
      <React.Fragment>
        {!subpage &&
          <React.Fragment>

            <Route
              path="/"
              render={props =>

                <AppHeader {...props} home={props.history.location.pathname === '/'} searchOpen={this.state.searchOpen} campus="Bloomington">
                <Avatar url="https://www.fillmurray.com/g/150/150" alt="Plceholder of Bill Murray"/>
              </AppHeader>

              }
            />


            <Route path="/" render={() =>
              <Tabs searchOpen={this.state.searchOpen} toggleSearch={this.toggleSearch} />
            } />
          </React.Fragment>
        }

        {subpage &&
          <SubHeader title={subpageTitles[urlIndex]} />
        }

        <Route exact path={"/bus"} component={Bus} />
        <Route exact path={"/bus/live/:id"} component={BusLive} />
        <Route exact path={"/bus/schedule/:route"} component={BusSchedule} />
        <Route path={"/card"} component={CrimsonCard} />
        <Route path={"/parking"} component={Parking} />
        <Route path={"/labs"} component={Labs} />
        <Route path={"/locations"} component={Locations} />
        <Route path={"/food"} component={Food} />
        <Route path={"/settings"} component={Settings} />


        {!this.state.searchOpen &&
        <button
          onClick={() => this.toggleSearch()}
          className="rvt-m-search-button"
        >
          <span className="rvt-sr-only">Search</span>
          { IconMagnifyingGlass }
        </button>
        }
      </React.Fragment>
    </Router>;
  }
}

export default App;
