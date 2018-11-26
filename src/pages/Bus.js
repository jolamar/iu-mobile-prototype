import React, { Component } from 'react';

import { Card } from "../components";

import { IconBus } from "../icons";

import axios from 'axios'


export class Bus extends Component {

  constructor(props) {
    super(props)
    this.state = {
      announcements: [],
      routes: [
        {
          "name": "A Route",
          "short_name": "A",
          "color": "BD0000"
        },
        {
          "name": "B Route",
          "short_name": "B",
          "color": "009933"
        },
        {
          "name": "E Route",
          "short_name": "E",
          "color": "8C259C"
        },
        {
          "name": "W Route",
          "short_name": "W",
          "color": "006298"
        },
        {
          "name": "W Limited",
          "short_name": "W-L",
          "color": "F5BB17"
        },
      ],
      stops: [],
      buses: [],
      etas: {
        stops: []
      },
      time: new Date()
    };

    this.findTerminal = this.findTerminal.bind(this)
    this.busesOnRoute = this.busesOnRoute.bind(this)
    this.dismissAlert = this.dismissAlert.bind(this)
    this.updateTime = this.updateTime.bind(this)
    this.getRouteTerminalDeparture = this.getRouteTerminalDeparture.bind(this)

  }

  updateTime() {
    // basically only used to rerender the "departs in X mins"
    this.setState({time: new Date()})
    return true
  }

  getRouteTerminalDeparture(route) {
    // route is either A, B, E, W, W-L, NO

    // W-L => WL
    route = route.replace('-','')

    const weekdaySchedule = {
      A: [ "7:25 AM", "7:31 AM", "7:37 AM", "7:44 AM", "7:54 AM", "8:04 AM", "8:14 AM", "8:20 AM", "8:30 AM", "8:40 AM", "8:46 AM", "8:56 AM", "9:06 AM", "9:11 AM", "9:20 AM", "9:25 AM", "9:30 AM", "9:35 AM", "9:40 AM", "9:50 AM", "9:57 AM", "10:03 AM", "10:10 AM", "10:15 AM", "10:22 AM", "10:30 AM", "10:36 AM", "10:41 AM", "10:51 AM", "10:56 AM", "11:02 AM", "11:12 AM", "11:22 AM", "11:31 AM", "11:40 AM", "11:44 AM", "11:50 AM", "11:53 AM", "12:01 PM", "12:10 PM", "12:17 PM", "12:25 PM", "12:30 PM", "12:34 PM", "12:43 PM", "12:52 PM", "1:00 PM", "1:09 PM", "1:15 PM", "1:20 PM", "1:26 PM", "1:34 PM", "1:41 PM", "1:51 PM", "1:59 PM", "2:06 PM", "2:11 PM", "2:21 PM", "2:30 PM", "2:39 PM", "2:52 PM", "3:06 PM", "3:15 PM", "3:20 PM", "3:24 PM", "3:29 PM", "3:45 PM", "3:54 PM", "4:03 PM", "4:11 PM", "4:17 PM", "4:25 PM", "4:30 PM", "4:38 PM", "4:46 PM", "4:54 PM", "5:03 PM", "5:11 PM", "5:19 PM", "5:28 PM", "5:36 PM", "5:44 PM", "5:53 PM", "6:01 PM", "6:11 PM", "6:20 PM", "6:29 PM", "6:38 PM", "6:47 PM", "7:00 PM", "7:15 PM", "7:30 PM", "7:40 PM", "7:50 PM", "8:00 PM", "8:15 PM", "8:35 PM", "8:45 PM", "9:00 PM", "9:30 PM", "9:45 PM", "10:15 PM", "10:30 PM", "11:15 PM", "12:00 AM" ],
      B: [ "7:30 AM", "7:40 AM", "8:00 AM", "8:15 AM", "8:33 AM", "8:44 AM", "8:48 AM", "8:55 AM", "9:06 AM", "9:15 AM", "9:22 AM", "9:33 AM", "9:45 AM", "9:51 AM", "9:58 AM", "10:09 AM", "10:20 AM", "10:30 AM", "10:41 AM", "10:49 AM", "11:00 AM", "11:09 AM", "11:20 AM", "11:32 AM", "11:44 AM", "11:56 AM", "12:05 PM", "12:15 PM", "12:26 PM", "12:37 PM", "12:46 PM", "12:56 PM", "1:06 PM", "1:16 PM", "1:26 PM", "1:38 PM", "1:51 PM", "2:02 PM", "2:12 PM", "2:22 PM", "2:34 PM", "2:44 PM", "2:55 PM", "3:06 PM", "3:17 PM", "3:28 PM", "3:39 PM", "3:50 PM", "4:01 PM", "4:13 PM", "4:25 PM", "4:33 PM", "4:44 PM", "5:04 PM", "5:15 PM", "5:23 PM", "5:38 PM", "5:45 PM", "5:58 PM", "6:23 PM", "6:36 PM", "7:04 PM", "7:20 PM", "7:40 PM", "8:05 PM", "8:15 PM", "8:45 PM", "9:15 PM", "9:50 PM", "10:20 PM", "10:55 PM", "11:25 PM", "12:00 AM" ],
      E: [ "7:25 AM", "7:45 AM", "8:00 AM", "8:25 AM", "8:35 AM", "8:45 AM", "9:05 AM", "9:15 AM", "9:25 AM", "9:45 AM", "9:55 AM", "10:05 AM", "10:25 AM", "10:35 AM", "10:45 AM", "11:05 AM", "11:15 AM", "11:25 AM", "11:45 AM", "11:55 AM", "12:05 PM", "12:25 PM", "12:35 PM", "12:45 PM", "1:05 PM", "1:15 PM", "1:25 PM", "1:45 PM", "1:55 PM", "2:05 PM", "2:25 PM", "2:35 PM", "2:45 PM", "3:05 PM", "3:15 PM", "3:25 PM", "3:45 PM", "3:55 PM", "4:05 PM", "4:20 PM", "4:40 PM", "5:00 PM", "5:20 PM", "5:40 PM", "6:00 PM", "6:20 PM", "6:40 PM", "7:05 PM", "7:20 PM", "7:40 PM", "8:00 PM", "8:15 PM", "8:50 PM", "9:25 PM", "10:00 PM", "10:35 PM", "11:10 PM", "11:45 PM" ],
      W: [ "7:25 AM", "7:35 AM", "7:50 AM", "8:00 AM", "8:15 AM", "8:25 AM", "8:38 AM", "8:47 AM", "8:56 AM", "9:05 AM", "9:10 AM", "9:14 AM", "9:23 AM", "9:32 AM", "9:41 AM", "9:50 AM", "9:59 AM", "10:08 AM", "10:17 AM", "10:26 AM", "10:35 AM", "10:44 AM", "10:53 AM", "11:02 AM", "11:11 AM", "11:20 AM", "11:29 AM", "11:38 AM", "11:47 AM", "11:56 AM", "12:05 PM", "12:33 PM", "12:42 PM", "12:51 PM", "1:00 PM", "1:09 PM", "1:18 PM", "1:27 PM", "1:36 PM", "1:45 PM", "1:54 PM", "2:03 PM", "2:09 PM", "2:16 PM", "2:25 PM", "2:32 PM", "2:42 PM", "3:02 PM", "3:11 PM", "3:20 PM", "3:29 PM", "3:38 PM", "3:47 PM", "3:56 PM", "4:05 PM", "4:14 PM", "4:23 PM", "4:32 PM", "4:41 PM", "4:50 PM", "4:59 PM", "5:12 PM", "5:29 PM", "5:41 PM", "5:56 PM", "6:09 PM", "6:15 PM", "6:30 PM", "6:40 PM", "6:55 PM", "7:10 PM", "7:35 PM", "8:10 PM", "8:40 PM", "9:05 PM", "9:40 PM", "10:05 PM" ],
      WL: [ "7:20 AM", "7:30 AM", "7:40 AM", "8:10 AM", "8:30 AM", "8:45 AM", "9:00 AM", "9:12 AM", "9:50 AM", "10:22 AM", "10:35 AM", "10:50 AM" ]
    }

    const fridaySchedule = {
      A: [ "7:20 AM", "7:32 AM", "7:42 AM", "7:52 AM", "8:10 AM", "8:20 AM", "8:30 AM", "8:44 AM", "8:54 AM", "9:02 AM", "9:15 AM", "9:25 AM", "9:33 AM", "9:40 AM", "9:47 AM", "9:54 AM", "10:03 AM", "10:12 AM", "10:21 AM", "10:28 AM", "10:35 AM", "10:44 AM", "10:53 AM", "11:02 AM", "11:09 AM", "11:16 AM", "11:25 AM", "11:34 AM", "11:43 AM", "11:50 AM", "11:57 AM", "12:06 PM", "12:16 PM", "12:26 PM", "12:33 PM", "12:39 PM", "12:49 PM", "1:00 PM", "1:11 PM", "1:21 PM", "1:31 PM", "1:40 PM", "1:46 PM", "1:55 PM", "2:05 PM", "2:14 PM", "2:21 PM", "2:31 PM", "2:41 PM", "2:52 PM", "3:00 PM", "3:05 PM", "3:10 PM", "3:18 PM", "3:28 PM", "3:38 PM", "3:43 PM", "3:48 PM", "4:08 PM", "4:18 PM", "4:22 PM", "4:28 PM", "4:38 PM", "4:48 PM", "4:53 PM", "4:58 PM", "5:18 PM", "5:29 PM", "5:40 PM", "5:51 PM", "6:03 PM", "6:15 PM", "6:21 PM", "6:27 PM", "6:39 PM", "6:55 PM", "7:05 PM", "7:15 PM", "7:35 PM", "7:55 PM", "8:20 PM", "8:45 PM", "8:55 PM", "9:08 PM", "9:28 PM", "9:37 PM", "9:45 PM" ],
      B: [ "7:30 AM", "7:45 AM", "8:05 AM", "8:20 AM", "8:40 AM", "8:55 AM", "9:15 AM", "9:30 AM", "9:50 AM", "10:05 AM", "10:25 AM", "10:40 AM", "11:00 AM", "11:15 AM", "11:35 AM", "11:50 AM", "12:10 PM", "12:20 PM", "12:40 PM", "12:55 PM", "1:15 PM", "1:30 PM", "1:50 PM", "2:05 PM", "2:25 PM", "2:40 PM", "3:00 PM", "3:15 PM", "3:35 PM", "3:50 PM", "4:10 PM", "4:25 PM", "4:50 PM", "5:05 PM", "5:25 PM", "5:40 PM", "6:00 PM", "6:30 PM", "7:05 PM", "7:35 PM", "8:10 PM", "8:40 PM", "9:15 PM", "9:45 PM", "10:15 PM" ],
      E: [ "7:30 AM", "7:50 AM", "8:10 AM", "8:30 AM", "8:50 AM", "9:10 AM", "9:30 AM", "9:50 AM", "10:10 AM", "10:30 AM", "10:50 AM", "11:10 AM", "11:35 AM", "11:55 AM", "12:15 PM", "12:35 PM", "12:55 PM", "1:15 PM", "1:35 PM", "1:55 PM", "2:15 PM", "2:35 PM", "2:55 PM", "3:15 PM", "3:30 PM", "3:50 PM", "4:10 PM", "4:30 PM", "4:50 PM", "5:10 PM", "5:30 PM", "5:50 PM", "6:10 PM", "6:25 PM", "6:45 PM", "7:20 PM", "8:05 PM", "8:40 PM", "9:15 PM", "9:50 PM", "10:25 PM", "10:55 PM" ],
      NO: [ "10:05 PM", "10:25 PM", "10:50 PM", "11:10 PM", "11:35 PM", "11:55 PM", "12:30 AM", "1:05 AM", "1:30 AM", "1:55 AM", "2:20 AM" ],
      W: [ "7:30 AM", "7:45 AM", "7:55 AM", "8:07 AM", "8:20 AM", "8:32 AM", "8:45 AM", "8:57 AM", "9:10 AM", "9:22 AM", "9:35 AM", "9:47 AM", "10:00 AM", "10:12 AM", "10:25 AM", "10:37 AM", "10:50 AM", "11:02 AM", "11:15 AM", "11:27 AM", "11:40 AM", "11:52 AM", "12:05 PM", "12:17 PM", "12:30 PM", "12:42 PM", "12:55 PM", "1:07 PM", "1:20 PM", "1:32 PM", "1:45 PM", "1:57 PM", "2:10 PM", "2:22 PM", "2:35 PM", "2:47 PM", "3:00 PM", "3:12 PM", "3:25 PM", "3:37 PM", "3:50 PM", "4:02 PM", "4:15 PM", "4:27 PM", "4:40 PM", "4:52 PM", "5:05 PM" ],
      WL: [ "7:20 AM", "7:30 AM", "7:40 AM", "8:10 AM", "8:30 AM", "8:45 AM", "9:00 AM", "9:12 AM", "9:50 AM", "10:22 AM", "10:35 AM", "10:50 AM" ]
    }

    const saturdaySchedule = {
      A: [ "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:10 PM", "12:40 PM", "1:10 PM", "1:40 PM", "2:20 PM", "2:50 PM", "3:20 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:40 PM", "6:10 PM", "6:40 PM", "7:10 PM", "7:55 PM", "8:30 PM", "9:15 PM" ],
      B: [ "10:20 AM", "10:50 AM", "11:25 AM", "11:55 AM", "12:30 PM", "1:00 PM", "1:35 PM", "2:05 PM", "2:35 PM", "3:05 PM", "3:35 PM", "4:10 PM", "4:45 PM", "5:20 PM", "5:55 PM", "7:05 PM", "7:40 PM", "8:15 PM", "8:45 PM", "9:20 PM" ],
      E: [ "11:05 AM", "12:05 PM", "1:05 PM", "2:05 PM", "3:05 PM", "4:05 PM", "5:05 PM", "6:05 PM" ],
      NO: [ "10:05 PM", "10:25 PM", "10:50 PM", "11:10 PM", "11:35 PM", "11:55 PM", "12:30 AM", "1:05 AM", "1:30 AM", "1:55 AM", "2:20 AM" ]
    }

    const sundaySchedule = {
      A: [ "12:10 PM", "12:40 PM", "1:10 PM", "1:40 PM", "2:20 PM", "2:50 PM", "3:20 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:40 PM", "6:10 PM", "6:40 PM", "7:10 PM", "7:55 PM", "8:30 PM", "9:15 PM", "10:00 PM" ],
      B: [ "12:30 PM", "1:00 PM", "1:35 PM", "2:05 PM", "2:35 PM", "3:05 PM", "3:35 PM", "4:10 PM", "4:45 PM", "5:20 PM", "5:55 PM", "7:05 PM", "7:40 PM", "8:15 PM", "8:45 PM", "9:20 PM" ],
      E: [ "1:05 PM", "2:05 PM", "3:05 PM", "4:05 PM", "5:05 PM", "6:05 PM" ]
  }

    const day = new Date().getDay()
    const friday = day === 5
    const saturday = day === 6
    const sunday = day === 7
    const weekend = saturday || sunday
    const weekday = !friday && !saturday && !sunday


    let schedule = weekdaySchedule
    if(friday) {
      schedule = fridaySchedule
    }

    if(saturday) {
      schedule = saturdaySchedule
    }

    if(sunday) {
      schedule = sundaySchedule
    }

    const listOfTimes = schedule[route]
    let terminalDepartures = []

    if(listOfTimes) {
      let lastTime, thisTime, minuteDifference
      let today = new Date()
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!

      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }

      let todayFormatted = mm + '/' + dd + '/' + yyyy;


      listOfTimes.map(time => {
        thisTime = Date.parse(todayFormatted + " " + time)
        if(thisTime < lastTime) {
          // calculate tomorrow's date (since it's past midnight)
          thisTime = Date.parse(mm + '/' + dd + 1 + '/' + yyyy + " " + time)
        }

        if(thisTime > today.getTime()) {
          minuteDifference = Math.abs(Math.ceil((thisTime - today.getTime()) / 1000 / 60))
          terminalDepartures.push(minuteDifference)
        }

        lastTime = thisTime
        return true
      })
    }


    return terminalDepartures
  }

  findTerminal(routeStops) {

    if(!routeStops) {
      return
    }
    let firstStopID = routeStops[0]
    let stops = this.state.stops

    let terminal = stops.find(stop => {
      return firstStopID === stop.id
    })

    terminal = terminal.name.split("(")[0]

    return terminal
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
      })

  }

  render() {
    const routes = this.state.routes
    const etas = this.state.etas
    const announcements = this.state.announcements

    const day = new Date().getDay()
    const friday = day === 5
    const saturday = day === 6
    const sunday = day === 7
    const weekend = saturday || sunday
    const weekday = !friday && !weekend

    setTimeout(()=> {
      this.updateTime()
    }, 5000)


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
        <Card className="rvt-m-top-sm" key={route.id + route.short_name} title = {
          <div className="bus-info">
            <div className="bus-info__icon">{/*<small>{ this.busesOnRoute(route).length }</small>*/} {!route.id && <div className="rvt-loader rvt-loader--xxs" aria-label="Content loading"></div>}{route.id && IconBus }</div>
            <div className="bus-info__route rvt-badge rvt-badge--aroute" style={{backgroundColor: `#${route.color}`}}>{route.name}</div>
            <div className="bus-info__stop">{this.findTerminal(route.stops)}</div>
          </div> }
          details = {
            <div>
              Departs in <span className="card__highlight--green rvt-text-bold">{this.getRouteTerminalDeparture(route.short_name)[0]} min{this.getRouteTerminalDeparture(route.short_name)[0] > 1 && 's'}</span>
              {this.getRouteTerminalDeparture(route.short_name)[1] && ' and '}
              <span className="card__highlight--green rvt-text-bold">{this.getRouteTerminalDeparture(route.short_name)[1]} min{this.getRouteTerminalDeparture(route.short_name)[1] > 1 && 's'}</span>


              { etas.stops.length > 0 && this.busesOnRoute(route).length === 0 && "The last bus has departed." }
            </div>
          }
          links = {[
            { title: 'Schedule', url: '/bus/schedule/'+route.short_name.replace('-','') },
            this.busesOnRoute(route).length > 0 ? { title: 'Live View', url: '/bus/live/'+route.id }: {},
          ]}
        />
      )}

      {weekday && !routes.find(route => route.short_name === 'W-L') && <Card className="rvt-m-top-sm" title = {
        <div className="bus-info">
          <div className="bus-info__icon">{ IconBus }</div>
          <div className="bus-info__route rvt-badge rvt-badge--aroute" style={{backgroundColor: `#F5BB17`}}>W Limited</div>
          <div className="bus-info__stop">Stadium</div>
        </div> }
                        details = {
                          <div>The last bus has departed.</div>
                        }
                        links = {[
                          { title: 'Schedule', url: '/bus/schedule/WL' }
                        ]}
      />}

      {weekend && !routes.find(route => route.short_name === 'W-L') && <Card className="rvt-m-top-sm" title = {
        <div className="bus-info">
          <div className="bus-info__icon">{ IconBus }</div>
          <div className="bus-info__route rvt-badge rvt-badge--aroute" style={{backgroundColor: `#F5BB17`}}>W Limited</div>
          <div className="bus-info__stop">Stadium</div>
        </div> }
         details = {
           <div>Buses do not run today.</div>
         }
         links = {[
           { title: 'Schedule', url: '/bus/schedule/WL' }
         ]}
      />}

      {weekday && <Card className="rvt-m-top-sm" title = {
          <div className="bus-info">
            <div className="bus-info__icon">{ IconBus }</div>
            <div className="bus-info__route rvt-badge rvt-badge--aroute" style={{backgroundColor: `#333333`}}>Night Owl</div>
            <div className="bus-info__stop">Stadium</div>
          </div> }
         details = {
           <div>Buses do not run today.</div>
         }
         links = {[
           { title: 'Schedule', url: '/bus/schedule/NO' }
         ]}
      />}
    </div>;
  }
}