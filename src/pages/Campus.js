import React, { Component } from 'react';

import { Card } from "../components";

export class Campus extends Component {

  render() {

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
        <div className="rvt-grid rvt-m-bottom-md">
          <div className="rvt-grid__item">
            <a href="/bus">
              <Card details={ "Bus Status" } />
            </a>
          </div>
          <div className="rvt-grid__item">
            <a href="/locations">
              <Card details={ "Locations" } />
            </a>
          </div>
        </div>

        <div className="rvt-grid rvt-m-bottom-md">
          <div className="rvt-grid__item">
            <a href="/card">
              <Card details={ "Crimson Card" }/>
            </a>
          </div>
          <div className="rvt-grid__item">
            <a href="/food">
<<<<<<< HEAD
              <Card details={ "Find Food" } />
=======
              <Card details={ "Find Food" }/>
>>>>>>> bce19da7f1b5b5711142097990a37a3ce81503bd
            </a>
          </div>
        </div>

        <div className="rvt-grid rvt-m-bottom-md">
          <div className="rvt-grid__item">
            <a href="/parking">
              <Card details={ "Parking" }/>
            </a>
          </div>
          <div className="rvt-grid__item">
            <a href="/labs">
              <Card details={ "Labs & Printers" } />
            </a>
          </div>
        </div>
    </div>;
  }
}
