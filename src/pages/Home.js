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


    </div>;
  }
}
