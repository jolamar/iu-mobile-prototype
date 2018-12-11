import React, { Component } from 'react';

import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import {AppHeader, Avatar } from './components';
import SubHeader from './components/SubHeader'

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
            searchOpen: false,
            searchBar: true,
            position: {}
        }
        this.toggleSearch = this.toggleSearch.bind(this)
        this.hideSearchBar = this.hideSearchBar.bind(this)
        this.setPosition = this.setPosition.bind(this)
        this.showSearchBar = this.showSearchBar.bind(this)
    }

    toggleSearch() {
        this.setState({searchOpen: !this.state.searchOpen})
    }

    hideSearchBar() {
        this.setState({searchBar: false})
    }

    showSearchBar() {
        this.setState({searchBar: true})
    }

    setPosition(position) {
        this.setState({position})
    }

    getDistance(lat1,lon1,lat2,lon2, unit) {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit==="K") { dist = dist * 1.609344 }
            if (unit==="N") { dist = dist * 0.8684 }
            return this.roundTo(dist, 2);
        }
    }

    deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    numberWithCommas(x) {
        let parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    convertMilesToFeet(miles) {
        return this.numberWithCommas(this.roundTo(miles * 5280.0, 2));
    }

    roundTo(n, digits) {
        let negative = false;

        if (digits === undefined) {
            digits = 0;
        }
        if (n < 0) {
            negative = true;
            n = n * -1;
        }

        const multiplicator = Math.pow(10, digits);
        n = parseFloat((n * multiplicator).toFixed(11));
        n = (Math.round(n) / multiplicator).toFixed(2);
        if (negative) {
            n = (n * -1).toFixed(2);
        }

        return n;
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.setPosition);
        }
    }

    render() {
        const path = window.location.pathname
        const urlIndex = subpages.indexOf(path)


        const position = this.state.position;
        const subpage = subpages.find(page => {
            return path.includes(page)
        })

        let latitude, longitude, miles, feet, distance
        if(position && position.coords && position.coords.latitude) {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            distance = this.getDistance(latitude, longitude,'39.1723747', '-86.5016779')
            miles = this.numberWithCommas(distance)
            feet = this.convertMilesToFeet(distance)
            console.log(`You: ${latitude}, ${longitude}`)
            console.log(`CIB: 39.1723747, -86.5016779`)
            console.log(`Distance (miles): ${miles} miles`)
            console.log(`Distance (feet): ${feet} feet`)
        }

        return <Router>
            <React.Fragment>
                {!subpage &&
                <React.Fragment>
                    <Route
                        path="/"
                        render={props =>
                            <AppHeader {...props} home={props.history.location.pathname === '/'} searchBar={this.state.searchBar} searchOpen={this.state.searchOpen} campus="Bloomington">
                                <Avatar url="https://www.fillmurray.com/g/150/150" alt="Placeholder of Bill Murray"/>
                            </AppHeader>
                        }
                    />
                    <Route path="/" render={() =>
                        <Tabs hideSearchBar={this.hideSearchBar} showSearchBar={this.showSearchBar} searchOpen={this.state.searchOpen} toggleSearch={this.toggleSearch} />
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
                <Route path="/locations" render={() =>
                    <Locations position={this.state.position} getDistance={this.getDistance} roundTo={this.roundTo} />
                } />
                <Route path={"/food"} component={Food} />
                <Route path={"/settings"} component={Settings} />


                {!this.state.searchOpen && !this.state.searchBar &&
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