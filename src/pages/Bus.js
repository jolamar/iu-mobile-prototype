import React, { Component } from 'react';

import { Card } from "../components";

export class Bus extends Component {

  render() {
    const path = window.location.pathname
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''


    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden={path !== basepath + '/bus'}>

      <div className="rvt-grid">
        <div className="rvt-grid__item">
          <Card details={ "Bus Status" }
                link={ "/" }
          />
        </div>
        <div className="rvt-grid__item">
          <Card details={ "Locations" }/>
        </div>
      </div>

      <div className="rvt-grid">
        <div className="rvt-grid__item">
          <Card details={ "Crimson Card" }/>
        </div>
        <div className="rvt-grid__item">
          <Card details={ "Find Food" }/>
        </div>
      </div>

      <div className="rvt-grid">
        <div className="rvt-grid__item">
          <Card details={ "Parking" }/>
        </div>
        <div className="rvt-grid__item">
          <Card details={ "Labs & Printers" }/>
        </div>
      </div>


    </div>;
  }
}
