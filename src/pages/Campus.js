import React, { Component } from 'react';

import { Card } from "../components";

export class Campus extends Component {

  render() {
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
        <div className="rvt-grid rvt-m-bottom-md">
          <div className="rvt-grid__item">
            <a href={basepath + "/bus"}>
              <Card details={ "Bus Status" } />
            </a>
          </div>
          <div className="rvt-grid__item">
            <a href={basepath + "/locations"}>
              <Card details={ "Locations" } />
            </a>
          </div>
        </div>

        <div className="rvt-grid rvt-m-bottom-md">
          <div className="rvt-grid__item">
            <Card details={ "Crimson Card" }/>
          </div>
          <div className="rvt-grid__item">
            <Card details={ "Find Food" }/>
          </div>
        </div>

        <div className="rvt-grid rvt-m-bottom-md">
          <div className="rvt-grid__item">
            <Card details={ "Parking" }/>
          </div>
          <div className="rvt-grid__item">
            <a href={basepath + "/labs"}>
              <Card details={ "Labs & Printers" } />
            </a>
          </div>
        </div>
    </div>;
  }
}
