import React, { Component } from 'react';

import { IconBus } from "../icons";

import axios from 'axios'
const rootURL = 'https://mobileprototype.indiana.edu';

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

        axios(rootURL + '/api/map/eta?route=' + route)
            .then((res) => {
                vm.setState({etas: res.data.etas})
            })

        // update ETAs every minute
        setTimeout(function() {
            this.getRouteEtas(route)
        }.bind(this), 30000)

    }


    getStopEtas(stop) {
        let vm = this

        let etas = Object.assign({}, this.state.etas)

        axios(rootURL + '/api/map/eta?stop=' + stop)
            .then((res) => {
                etas[stop] = res.data.etas[stop]
                vm.setState({etas})
            })

        // update ETAs every minute
        setTimeout(function() {
            this.getStopEtas(stop)
        }.bind(this), 30000)

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
        return this.state.buses.find(bus => bus.heading === stopId)
    }

    getlastStop(stopId) {
        return this.state.buses.find(bus => bus.lastStop === stopId)
    }

    getStop(stopId) {
        const stop = this.state.stops.find(stop=>stop.id === stopId)
        return stop && stop.name.split("(")[0]
    }

    updateSchedule() {

        let vm = this

        axios(rootURL + '/api/map/schedule')
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
        }.bind(this), 30000)
    }

    componentDidMount() {
        let vm = this





        // get the bus schedule
        // (routes, stops, buses, and etas)
        axios(rootURL + '/api/map/schedule')
            .then((res) => {
                vm.setState({
                    routes: res.data.routes,
                    route: res.data.routes.find(route=>route.id.toString() === this.props.match.params.id),
                    stops: res.data.stops,
                    buses: res.data.buses.filter(bus=>bus.route.toString() === vm.props.match.params.id)
                })

                setTimeout(function(){
                    this.getRouteEtas(this.state.route.id)
                }.bind(this), 200)

                setTimeout(function(){
                    this.updateSchedule()
                }.bind(this), 30000)
            })

        setTimeout(function() {
            // load announcements
            axios(rootURL + '/api/map/announcements')
                .then((res) => {
                    let announcements = res.data
                    let dismissedAnnouncements = JSON.parse(localStorage.getItem('dismissedAnnouncements'))

                    if(dismissedAnnouncements && !!announcements.filter) {
                        announcements = announcements.filter(a => dismissedAnnouncements.indexOf(a.title) === -1)
                    }

                    vm.setState({
                        announcements
                    })
                })
        }, 1000)
    }

    render() {
        const route = this.state.route


        return <React.Fragment>
            <div className="rvt-scroll">
                <iframe id="buslive" className="rvt-embed" src={`https://iub.doublemap.com/map/embed?name=${route.name}`} title="Map of IU buses around campus" />
                <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

                    {!route.stops && <div className="rvt-display-flex"><div className="rvt-loader rvt-m-tb-lg rvt-container--center rvt-loader--xxl" aria-label="Content loading"></div></div>}

                    <ol className='bus-live rvt-plain-list'>
                        { route.stops && route.stops.map(stopId =>
                            <li className={`${this.isBusesHeadingSoon(stopId) ? 'rvt-text-bold' : ''} bus-live__item`} key={stopId}>
                                {/* Bus icon */ this.getlastStop(stopId) ? <span className="bus-live__icon rvt-m-lr-xs">{IconBus}</span> : '' }

                                {/* Bus ID  this.getlastStop(stopId) ? '(id:' + this.getlastStop(stopId).name + ') ' : '' */}

                                {/* Stop name */}<strong>{this.getStop(stopId)}{/*  (id:{stopId})*/}</strong>
                                <br />
                                {/* ETA in minutes */ this.getStopEta(stopId) ? (this.getStopEta(stopId) > 0 ? <span className="rvt-ts-14">{this.getStopEta(stopId)} mins</span> : <span className="card__highlight--green rvt-ts-14 rvt-text-bold">Arriving</span>) : ''}
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        </React.Fragment>
            ;
    }
}