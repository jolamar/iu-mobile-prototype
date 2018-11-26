import React, { Component } from 'react';

import { IconBus } from "../icons";

import axios from 'axios'

export class BusLive extends Component {

  constructor(props) {
    super(props)
    this.state = {
      announcements: [],
      routes: [],
      route: {},
      stops: [],
      buses: [],
      etas: []
    };

    this.findTerminal = this.findTerminal.bind(this)
    this.getStopEtas = this.getStopEtas.bind(this)
    this.getRouteEtas = this.getRouteEtas.bind(this)
    this.getStopEta = this.getStopEta.bind(this)
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

  getRouteEtas(route) {
    let vm = this

    axios('https://githubapi.iu.edu/api/map/eta?route=' + route)
      .then((res) => {
        vm.setState({etas: res.data.etas})
      })

    // update ETAs every minute
    setTimeout(function() {
      this.getRouteEtas(route)
    }.bind(this), 60000)

  }


  getStopEtas(stop) {
    let vm = this

    let etas = Object.assign({}, this.state.etas)

    axios('https://githubapi.iu.edu/api/map/eta?stop=' + stop)
      .then((res) => {
        etas[stop] = res.data.etas[stop]
        vm.setState({etas})
      })

    // update ETAs every minute
    setTimeout(function() {
      this.getStopEtas(stop)
    }.bind(this), 60000)

  }

  getStopEta(stopId) {

    const etas = this.state.etas;

    if(!etas) {
      return
    }

    return etas[stopId] && etas[stopId].etas[0].avg
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

  getlastStop(stopId) {
    return this.state.buses.find(bus => bus.lastStop == stopId)
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
          route: res.data.routes.find(route=>route.id == this.props.match.params.id),
          stops: res.data.stops,
          buses: res.data.buses.filter(bus=>bus.route == vm.props.match.params.id)
        })

        setTimeout(function(){
          this.getRouteEtas(this.state.route.id)
        }.bind(this), 200)

        setTimeout(function(){
          this.updateSchedule()
        }.bind(this), 60000)
      })
  }

  render() {
    const route = this.state.route

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
      <ol className='bus-live rvt-plain-list'>
        { route.stops && route.stops.map(stopId =>
          <li className={`${this.isBusesHeadingSoon(stopId) ? 'rvt-text-bold' : ''} bus-live__item`} key={stopId}>
            {/* Bus icon */ this.getlastStop(stopId) ? <span className="bus-live__icon rvt-m-lr-xs">{IconBus}</span> : '' }

            {/* Bus ID  this.getlastStop(stopId) ? '(id:' + this.getlastStop(stopId).name + ') ' : '' */}

            {/* Stop name */}<strong>{this.getStop(stopId)}{/*  (id:{stopId})*/}</strong>
            <br />
            {/* ETA in minutes */ this.getStopEta(stopId) ? (this.getStopEta(stopId) > 1 ? <span className="rvt-ts-14">{this.getStopEta(stopId)} mins</span> : <span className="card__highlight--green rvt-ts-14 rvt-text-bold">Arriving soon</span>) : ''}
          </li>
        )}
      </ol>
    </div>;
  }
}