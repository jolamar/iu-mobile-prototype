import React, { Component } from 'react';

import { Card, Scroller } from "../components";

export class Classes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollY: 'scroll'
    }

    this.disableScrollY = this.disableScrollY.bind(this)
    this.enableScrollY = this.enableScrollY.bind(this)
  }

  disableScrollY() {
    this.setState({
      scrollY: '-webkit-paged-x'
    })
  }

  enableScrollY() {
    this.setState({
      scrollY: 'scroll'
    })
  }

  render() {
    const path = window.location.pathname
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''

    return <div style={{overflowY: this.state.scrollY}} className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-2" aria-labelledby="t-two" >
      <h2 className="rvt-ts-23 rvt-text-bold">Course list</h2>

      <Scroller disableScrollY={this.disableScrollY} enableScrollY={this.enableScrollY}>
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
      </Scroller>

      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-lg">Assignments due today</h2>
      <Scroller disableScrollY={this.disableScrollY} enableScrollY={this.enableScrollY}>

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
      </Scroller>


      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-lg">Other assignments</h2>
      <Scroller disableScrollY={this.disableScrollY} enableScrollY={this.enableScrollY}>

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
      </Scroller>
    </div>;
  }
}
