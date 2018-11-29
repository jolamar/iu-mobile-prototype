import React, { Component } from 'react';

import { Card, SectionLabel } from "../components";

import {Link} from 'react-router-dom'

export class Campus extends Component {

  render() {

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

      <SectionLabel className="rvt-m-top-remove">Getting around</SectionLabel>
      <div className="cards">
        <Link to="/bus">
          <Card details={ "Bus Status" } />
        </Link>
      </div>
      <a href="/locations">
        <Card details={ "Buildings" } />
      </a>
      <a href="/parking">
        <Card details={ "Parking" }/>
      </a>

      <SectionLabel className="rvt-m-top-lg">Getting stuff done</SectionLabel>
      <a href="/labs">
        <Card details={ "Labs" } />
      </a>
      <a href="/labs">
        <Card details={ "Printers" } />
      </a>
      <a href="/card">
        <Card details={ "Crimson Card" }/>
      </a>

      <SectionLabel className="rvt-m-top-lg">Things to do</SectionLabel>
      <a href="/food">
        <Card details={ "Find Food" } />
      </a>

      <a href="/food">
        <Card details={ "Events" } />
      </a>

    </div>;
  }
}
