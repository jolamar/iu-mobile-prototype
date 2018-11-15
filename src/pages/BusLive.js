import React, { Component } from 'react';

import { Card } from "../components";

import { IconBus } from "../icons";

import axios from 'axios'

export class BusLive extends Component {

  constructor(props) {
    super(props)
    this.state = {
      announcements: [],
      routes: [],
      stops: [],
      buses: [],
      etas: {
        stops: []
      }
    };

    this.findTerminal = this.findTerminal.bind(this)
    this.getEtas = this.getEtas.bind(this)
    this.busesOnRoute = this.busesOnRoute.bind(this)
    this.dismissAlert = this.dismissAlert.bind(this)

  }

  findTerminal(routeStops) {

    let firstStopID = routeStops[0]
    let stops = this.state.stops

    let terminal = stops.find(stop => {
      return firstStopID === stop.id
    })

    terminal = terminal.name.split("(")[0]

    return terminal
  }

  getEtas(stop) {
    let vm = this
    let etas = Object.assign({},this.state.etas)


    axios('https://githubapi.iu.edu/api/map/eta?stop=' + stop)
      .then((res) => {
        etas.stops[stop] = res.data.etas[stop].etas
        vm.setState({etas})
      })

    // update ETAs every minute
    setTimeout(function() {
      this.getEtas(stop)
    }.bind(this), 60000)

  }

  busesOnRoute(route) {

    if(!route) {
      return []
    }

    const buses = this.state.buses
    return buses.filter(bus => {
      return bus.route === route.id
    })
  }

  dismissAlert(title) {
    let dismissedAnnouncements = JSON.parse(localStorage.getItem('dismissedAnnouncements'))
    if(!dismissedAnnouncements) {
      dismissedAnnouncements = []
    }
    dismissedAnnouncements.push(title)

    localStorage.setItem('dismissedAnnouncements', JSON.stringify(dismissedAnnouncements))
  }


  isBusesHeadingSoon(stopId) {
    return this.state.buses.find(bus => bus.heading == stopId)
  }

  getStop(stopId) {
    return this.state.stops.find(stop=>stop.id == stopId).name.split("(")[0]
  }

  updateSchedule() {

    let vm = this

    axios('https://githubapi.iu.edu/api/map/schedule')
      .then((res) => {
        vm.setState({
          routes: res.data.routes,
          stops: res.data.stops,
          buses: res.data.buses
        })
      })

    // update schedule every minute
    setTimeout(function() {
      this.updateSchedule()
    }.bind(this), 60000)
  }

  componentDidMount() {
    let vm = this

    // load announcements
    axios('https://githubapi.iu.edu/api/map/announcements')
      .then((res) => {
        let announcements = res.data
        let dismissedAnnouncements = JSON.parse(localStorage.getItem('dismissedAnnouncements'))

        if(dismissedAnnouncements) {
          announcements = announcements.filter(a => dismissedAnnouncements.indexOf(a.title) === -1)
        }

        vm.setState({
          announcements
        })
      })

    // get the bus schedule
    // (routes, stops, buses, and etas)
    axios('https://githubapi.iu.edu/api/map/schedule')
      .then((res) => {
        vm.setState({
          routes: res.data.routes,
          stops: res.data.stops,
          buses: res.data.buses
        })
        setTimeout(function(){
          this.state.routes.map(route => {
            return this.getEtas(route.stops[0])
          })
        }.bind(this), 200)

        setTimeout(function(){
          this.updateSchedule()
        }.bind(this), 60000)
      })
  }

  render() {
    const routes = this.state.routes
    const etas = this.state.etas
    const announcements = this.state.announcements
    const route = routes.find(route=>route.id == this.props.match.params.id)
    console.log(route)
    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
      <ol>
        { route && route.stops.map(stopId =>
          <li class={this.isBusesHeadingSoon(stopId) ? 'rvt-text-bold' : ''} key={stopId}>{this.getStop(stopId)}<br />
            <span className="card__highlight--green rvt-ts-14 rvt-text-bold">{this.isBusesHeadingSoon(stopId) ? 'Arriving soon' : ''}</span>
          </li>
        )}
      </ol>
    </div>;
  }
}