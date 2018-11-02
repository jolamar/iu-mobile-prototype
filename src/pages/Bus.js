import React, { Component } from 'react';

import { Card } from "../components";

import axios from 'axios'

export class Bus extends Component {

  constructor(props) {
    super(props)
    this.state = {
      routes: []
    };

  }

  componentDidMount() {
    let vm = this
    axios('https://githubapi.iu.edu/api/map/routes')
      .then((res) => {

        vm.setState({ routes: res.data })
      })
  }

  render() {
    const path = window.location.pathname
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''

    const routes = this.state.routes

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden={path !== basepath + '/bus'}>

      <div className="rvt-alert rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby="success-alert-title">
          <h1 className="rvt-alert__title" id="success-alert-title">Bus service suspended tomorrow morning</h1>
          <p className="rvt-alert__message">Tomorrow is the Jill Behrman Color the Campus 5k. During this event we will not be running any bus service. We expect to start service around 1:30 tomorrow. We apologize for the inconvenience.</p>
      </div>

      { !!routes && routes.map(route =>
        <Card key={route.id} title = {
          <div>
            <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--aroute" style={{backgroundColor: `#${route.color}`}}>{route.name}</div> Stadium<br />
          </div> }
          details = {
            <div>
              Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
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
