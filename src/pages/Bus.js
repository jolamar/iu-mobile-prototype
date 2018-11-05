import React, { Component } from 'react';

import { Card } from "../components";

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
    axios('https://githubapi.iu.edu/api/map/routes')
      .then((res) => {

        vm.setState({ routes: res.data })
      })

    axios('https://githubapi.iu.edu/api/map/stops')
      .then((res) => {

        vm.setState({ stops: res.data })
      })
      
  }

  render() {
    const routes = this.state.routes
    const stops = this.state.stops

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

      <div className="rvt-alert rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby="success-alert-title">
          <h1 className="rvt-alert__title" id="success-alert-title">Bus service suspended tomorrow morning</h1>
          <p className="rvt-alert__message">Tomorrow is the Jill Behrman Color the Campus 5k. During this event we will not be running any bus service. We expect to start service around 1:30 tomorrow. We apologize for the inconvenience.</p>
      </div>

      { !!routes && routes.map(route =>
        <Card key={route.id} title = {
          <div>
            <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--aroute" style={{backgroundColor: `#${route.color}`}}>{route.name}</div> {findTerminal(route.stops, stops)}<br />
          </div> }
          details = {
            <div>
              Departs in <span className="card__highlight--green rvt-text-bold">2 mins</span> & <span className="card__highlight--green rvt-text-bold">7 mins</span>
            </div>
          }
          links = {[
            { title: 'Details', url: '#' },
            { title: 'Live View', url: '#' },
          ]}
        />
      )}

    </div>;
  }
}

function findTerminal(routeStops, allStops) {
  var found = false
  var i = 0
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