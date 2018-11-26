import React, { Component } from 'react';

import { Card } from "../components";

import { IconBus } from "../icons";

import axios from 'axios'

export class Bus extends Component {

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
      })
  }

  render() {
    const routes = this.state.routes
    const etas = this.state.etas
    const announcements = this.state.announcements

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">


      { announcements.length > 0 && announcements.map( announcement =>
        <div key={announcement.date} className="rvt-alert rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby={`alert-${announcement.date}`}>
          <h1 className="rvt-alert__title" id={`alert-${announcement.date}`}>{ announcement.title }</h1>
          <p className="rvt-alert__message">{announcement.message}</p>
          <button onClick={()=>this.dismissAlert(announcement.title)} className="rvt-alert__dismiss">
            <span className="v-hide">Dismiss this alert</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path fill="currentColor"
                    d="M9.41,8l5.29-5.29a1,1,0,0,0-1.41-1.41L8,6.59,2.71,1.29A1,1,0,0,0,1.29,2.71L6.59,8,1.29,13.29a1,1,0,1,0,1.41,1.41L8,9.41l5.29,5.29a1,1,0,0,0,1.41-1.41Z"/>
            </svg>
          </button>
        </div>
      )}

      { !!routes && routes.map(route =>
        <Card className="rvt-m-top-sm" key={route.id} title = {
          <div className="bus-info">
            <div className="bus-info__icon">{/*<small>{ this.busesOnRoute(route).length }</small>*/} { IconBus }</div>
            <div className="bus-info__route rvt-badge rvt-badge--aroute" style={{backgroundColor: `#${route.color}`}}>{route.name}</div>
            <div className="bus-info__stop">{this.findTerminal(route.stops)}</div>
          </div> }
          details = {
            <div>
              { this.busesOnRoute(route).length > 0 && etas.stops[route.stops[0]] && etas.stops[route.stops[0]].length > 0 &&
                <React.Fragment>
                  Departs in { etas.stops[route.stops[0]].map((eta, index) =>
                  <React.Fragment key={eta.bus_id + index}>
                    <span className="card__highlight--green rvt-text-bold">{eta.avg} min{eta.avg > 1 && 's'}</span>
                    <span>{index < (etas.stops[route.stops[0]].length - 1) && ' and '}</span>
                  </React.Fragment>
                )}
                </React.Fragment>
              }

              { new Date().getHours() > new Date("Feb 1, 1999 " + route.end_time).getHours()
                && new Date("Feb 1, 1999 " + route.end_time).getHours() > new Date("Feb 1, 1999 " + route.start_time).getHours()
                && "This route ends at " + route.end_time.substring(0,5) + (new Date("Feb 1, 1999 " + route.end_time).getHours() > 11 ? 'PM.' : 'AM.') }
              { this.busesOnRoute(route).length === 0 && "Buses are currently not running." }
            </div>
          }
          links = {[
            { title: 'Schedule', url: '/bus/schedule/'+route.short_name.replace('-','') },
            this.busesOnRoute(route).length > 0 ? { title: 'Live View', url: '/bus/live/'+route.id }: {},
          ]}
        />
      )}

    </div>;
  }
}