import React, { Component } from 'react';

import { Card } from "../components";

export class Classes extends Component {

  render() {
    return <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-2" aria-labelledby="t-two" hidden>
      <h2 className="rvt-ts-23 rvt-text-bold">Course list</h2>

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

      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-lg">Assignments due today</h2>
      <Card title      = { "Quiz 7" }
            details    = { "ECON-E 202" }
            subdetails = { "Today at 11:59 PM" }
            links      = {[
              { title: 'Details', url: '#' }
            ]}
      />

      <Card title      = { "Ch 9 HW" }
            details    = { "STAT-S 301" }
            subdetails = { "Today at 11:59 PM" }
            links      = {[
              { title: 'Details',   url: '#' }
            ]}
      />

      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-lg">Other assignments</h2>
      <Card title      = { "Q&A 6" }
            details    = { "ECON-E 202" }
            subdetails = { "Tomorrow at 11:59 PM" }
            links      = {[
              { title: 'Details', url: '#' }
            ]}
      />

      <Card title      = { "Ch 10 HW" }
            details    = { "STAT-S 301" }
            subdetails = { "Tomorrow at 11:59 PM" }
            links      = {[
              { title: 'Details',   url: '#' }
            ]}
      />


    </div>;
  }
}
