import React, { Component } from 'react';

import { Card, Stack } from "../components";

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
    return <div style={{overflowY: this.state.scrollY}} className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-2" aria-labelledby="t-two" >
      
      <h2 className="rvt-ts-16 rvt-text-regular rvt-headlines">Assignments due today</h2>
      <Stack>
        <Card title      = { "Ch 9 HW" }
              details    = { "STAT-S 301" }
              subdetails = { "Today at 11:59 PM" }
              links      = {[
                { title: 'Details',   url: '#' }
              ]}
        />
        <Card title      = { "Ch 9 HW" }
              details    = { "STAT-S 301" }
              subdetails = { "Today at 11:59 PM" }
              links      = {[
                { title: 'Details',   url: '#' }
              ]}
        />
        <Card title      = { "Ch 9 HW" }
              details    = { "STAT-S 301" }
              subdetails = { "Today at 11:59 PM" }
              links      = {[
                { title: 'Details',   url: '#' }
              ]}
        />
      </Stack>
      
      <h2 className="rvt-ts-16 rvt-text-regular rvt-headlines rvt-m-top-lg">Course list</h2>
      <Stack>
        <Card title      = { "BUS-L 201" }
              subtitle   = { "Legal Environments of Business" }
              details    = { "5:30 PM - 6:45 PM" }
              subdetails = { "Hodge Hall 1000" }
              links      = {[
                { title: 'Getting there', url: '#' },
                { title: 'Assignments',   url: '#' }
              ]}
        />
        <Card title      = { "BUS-L 201" }
              subtitle   = { "Legal Environments of Business" }
              details    = { "5:30 PM - 6:45 PM" }
              subdetails = { "Hodge Hall 1000" }
              links      = {[
                { title: 'Getting there', url: '#' },
                { title: 'Assignments',   url: '#' }
              ]}
        />
        <Card title      = { "BUS-L 201" }
              subtitle   = { "Legal Environments of Business" }
              details    = { "5:30 PM - 6:45 PM" }
              subdetails = { "Hodge Hall 1000" }
              links      = {[
                { title: 'Getting there', url: '#' },
                { title: 'Assignments',   url: '#' }
              ]}
        />
      </Stack>

    </div>;
  }
}
