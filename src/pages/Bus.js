import React, { Component } from 'react';

import { Card } from "../components";

import { IconBus } from "../icons";

import axios from 'axios'

export class Bus extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: [],
      stops: []
    };

  }

  componentDidMount() {
    let vm = this
    axios('https://githubapi.iu.edu/api/map/schedule')
      .then((res) => {
        vm.setState({ routes: res.data.routes, stops: res.data.stops })
      })
  }

  render() {
    const routes = this.state.routes
    const stops = this.state.stops

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
        <div>
          <svg className="rvt-grid__item--last" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="currentColor" d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"/>
          </svg>
        </div>
      </button>

      { !!routes && routes.map(route =>
        <Card className="rvt-m-top-sm" key={route.id} title = {
          <div className="bus-info">
            <div className="bus-info__icon">{ IconBus }</div>
            <div className="bus-info__route rvt-badge rvt-badge--aroute" style={{backgroundColor: `#${route.color}`}}>{route.name}</div>
            <div className="bus-info__stop">{findTerminal(route.stops, stops)}</div>
          </div> }
          details = {
            <div>
              Departs in <span className="card__highlight--green rvt-text-bold">2 mins</span> & <span className="card__highlight--green rvt-text-bold">7 mins</span>
            </div>
          }
          links = {[
            { title: 'Schedule', url: '#' },
            { title: 'Live View', url: '#' },
          ]}
        />
      )}

    </div>;
  }
}

function findTerminal(routeStops, allStops) {
  let found = false
  let i = 0
  while(!found && i<=allStops.length) {
    let firstStopID = routeStops[0]
    let currentStopID = !!allStops[i] && allStops[i].id

    if (firstStopID === currentStopID) {
      console.log(allStops[i])
      found = true
      return removeExtraChars(allStops[i].name)
    }
    i++
  }
}

function removeExtraChars(name) {
  name = name.split("(")
  return name[0]
}