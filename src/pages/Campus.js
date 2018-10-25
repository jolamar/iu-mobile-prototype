import React, { Component } from 'react';

import { Card } from "../components";

export class Campus extends Component {

  render() {
    return <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden>
      <Card details    = { "Bus Status" }/>
      <Card details    = { "Locations" }/>
      <Card details    = { "Crimson Card" }/>
      <Card details    = { "Find Food" }/>
      <Card details    = { "Parking" }/>
      <Card details    = { "Labs & Printers" }/>
    </div>;
  }
}
