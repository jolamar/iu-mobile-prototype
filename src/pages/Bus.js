import React, { Component } from 'react';

import { Card } from "../components";

import { IconBus } from "../icons";

import axios from 'axios'

export class Bus extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      stops: [],
      buses: [],
      etas: []
    };

    this.findTerminal = this.findTerminal.bind(this)
    this.getEtas = this.getEtas.bind(this)
    this.busesOnRoute = this.busesOnRoute.bind(this)

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
    let etas = this.state.etas


    axios('https://githubapi.iu.edu/api/map/eta?stop=' + stop)
      .then((res) => {
        etas = res.data.etas[stop].etas
        vm.setState({etas})
      })


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

  componentDidMount() {
    let vm = this
    axios('https://githubapi.iu.edu/api/map/schedule')
      .then((res) => {
        vm.setState({
          routes: res.data.routes,
          stops: res.data.stops,
          buses: res.data.buses
        })
        setTimeout(function(){
          this.state.routes.map(route => {
            this.getEtas(route.stops[0])
          })
        }.bind(this), 200)
      })



  }

  render() {
    const routes = this.state.routes
    const etas = this.state.etas

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">


      <button className="rvt-m-top-md rvt-m-bottom-xl rvt-alert rvt-alert--button rvt-display-flex rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby="warning-alert-title">

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="currentColor">
              <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
              <path d="M8,9A1,1,0,0,1,7,8V5A1,1,0,0,1,9,5V8A1,1,0,0,1,8,9Z"/>
              <circle cx="8" cy="11" r="1"/>
            </g>
          </svg>
        </div>
        <h1 className="rvt-alert__title" id="warning-alert-title">Color the Campus 5k tomorrow. Expect delays</h1>
        <div className="rvt-grid__item--last">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"/>
          </svg>
        </div>
      </button>

      { !!routes && routes.map(route =>
        <Card className="rvt-m-top-sm" key={route.id} title = {
          <div className="bus-info">
            <div className="bus-info__icon">{ IconBus }</div>
            <div className="bus-info__route rvt-badge rvt-badge--aroute" style={{backgroundColor: `#${route.color}`}}>{route.name}</div>
            <div className="bus-info__stop">{this.findTerminal(route.stops)}</div>
          </div> }
          details = {
            <div>
              { this.busesOnRoute(route).length > 0 && etas.length > 0 &&
                <React.Fragment>
                  Departs in { etas.map((eta, index) =>
                  <React.Fragment key={eta.bus_id + index}>
                    <span className="card__highlight--green rvt-text-bold">{eta.avg} min{eta.avg > 1 && 's'}</span>
                    <span>{index < (etas.length - 1) && ' and '}</span>
                  </React.Fragment>
                )}
                </React.Fragment>
              }
              { this.busesOnRoute(route).length === 0 && "Buses are currently not running." }
            </div>
          }
          links = {[
            { title: 'Schedule', url: '#' },
            this.busesOnRoute(route).length > 0 ? { title: 'Live View', url: '#' }: {},
          ]}
        />
      )}

    </div>;
  }
}