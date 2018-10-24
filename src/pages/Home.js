import React, { Component } from "react";

import { Card } from "../components";

export class Home extends Component {

  render() {
    return <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-1" aria-labelledby="t-one">

      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-bottom-md">Good morning, Josh.<br />
        You have 2 classes today.
      </h2>

      <Card title      = { "BUS-L 201" }
            subtitle   = { "Legal Environments of Business" }
            details    = { "5:30 PM - 6:45 PM" }
            subdetails = { "Hodge Hall 1000" }
            links      = {[
              { title: 'Getting there', url: '#' },
              { title: 'Assignments',   url: '#' }
            ]}
      />

      <Card title      = { "BUS-E 125" }
            subtitle   = { "Intro to Ethics in Business" }
            details    = { "7:00 PM - 7:45 PM" }
            subdetails = { "Simon Hall 010" }
            links      = {[
              { title: 'Getting there', url: '#' },
              { title: 'Assignments',   url: '#' }
            ]}
      />


      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-lg rvt-m-bottom-md">Grab breakfast</h2>


      <Card title      = { "Gresham Food Court" }
            details    = { "Open now: 7:00 AM - 2:00 AM" }
            links      = {[
              { title: 'Getting there', url: '#' },
              { title: 'Details',   url: '#' }
            ]}
      />

      <Card title      = { "McNutt Food Court" }
            details    = { "Open now: 9:00 AM - 8:00 PM" }
            links      = {[
              { title: 'Getting there', url: '#' },
              { title: 'Details',   url: '#' }
            ]}
      />

      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-lg rvt-m-bottom-md">Getting to class</h2>


      <Card title      = { "Going to Kelley School" }
            details    = {
              <div>
                <div className="rvt-m-top-sm rvt-m-bottom-xs rvt-badge rvt-badge--error">A Route</div> Stadium<br />
                Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
              </div>
            }
            subdetails={
              <div>
                <div className="rvt-m-top-sm rvt-m-bottom-xs rvt-badge rvt-badge--warning">W Limited</div> Stadium<br />
                Departs in <span className="rvt-alert--success">6 mins</span> & <span className="rvt-alert--success">13 mins</span>
              </div>
            }
      />

    </div>;
  }
}
