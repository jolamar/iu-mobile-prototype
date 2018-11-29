import React, { Component } from "react";

import { Card, Collapsible, SectionLabel } from "../components";

export class Home extends Component {

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

    return <div style={{overflowY: this.state.scrollY}} className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-1" aria-labelledby="t-one">

      <SectionLabel className="rvt-m-top-remove">Today’s classes</SectionLabel>
      <div className="cards">
        <Card title      = { "BUS-L 201" }
              subtitle   = { "Legal Environments of Business" }
              details    = { "5:30 PM - 6:45 PM" }
              subdetails = { "Hodge Hall 1000" }
              links      = {[
                { title: 'Getting there', url: '#' },
                { title: 'Assignments',   url: '#' }
              ]}
        />
        <Collapsible>
          <Card title      = { "BUS-L 123" }
                subtitle   = { "Great Environments" }
                details    = { "5:30 AM - 6:45 AM" }
                subdetails = { "Kelley 290" }
                links      = {[
                  { title: 'Getting there', url: '#' },
                  { title: 'Assignments',   url: '#' }
                ]}
          />
          <Card title      = { "BUS-L 401" }
                subtitle   = { "Real Business" }
                details    = { "1:30 PM - 2:45 PM" }
                subdetails = { "Jordan 49" }
                links      = {[
                  { title: 'Getting there', url: '#' },
                  { title: 'Assignments',   url: '#' }
                ]}
          />
        </Collapsible>
      </div>

      <SectionLabel className="rvt-m-top-lg">Food</SectionLabel>
      <div className="cards">
        <Card title      = { "Gresham Food Court" }
              details    = { "Open now: 7:00 AM - 2:00 AM" }
              links      = {[
                { title: 'Getting there', url: '#' },
                { title: 'Details',   url: '#' }
              ]}
        />
        <Collapsible>
          <Card title      = { "Gresham Food Court" }
                details    = { "Open now: 7:00 AM - 2:00 AM" }
                links      = {[
                  { title: 'Getting there', url: '#' },
                  { title: 'Details',   url: '#' }
                ]}
          />
          <Card title      = { "Gresham Food Court" }
                details    = { "Open now: 7:00 AM - 2:00 AM" }
                links      = {[
                  { title: 'Getting there', url: '#' },
                  { title: 'Details',   url: '#' }
                ]}
          />
        </Collapsible>
      </div>

      <SectionLabel className="rvt-m-top-lg">Buses</SectionLabel>
      <Card title      = { "Going to Kelley School" }
            details    = {
              <div>
                <div className="rvt-m-top-sm rvt-m-bottom-xs rvt-badge rvt-badge--error">A Route</div> Stadium<br />
                Departs in <span className="card__highlight--green rvt-text-bold">2 mins</span> & <span className="card__highlight--green rvt-text-bold">7 mins</span>
              </div>
            }
            subdetails={
              <div>
                <div className="rvt-m-top-sm rvt-m-bottom-xs rvt-badge rvt-badge--warning">W Limited</div> Stadium<br />
                Departs in <span className="card__highlight--green rvt-text-bold">6 mins</span> & <span className="card__highlight--green rvt-text-bold">13 mins</span>
              </div>
            }
      />

      <div className="rvt-display-flex rvt-m-top-lg">
        <SectionLabel>Looking for things to do?</SectionLabel>
        <button className="rvt-grid__item--last rvt-button rvt-button--plain">View all events</button>
      </div>

      <Card banner     = { "./img/stadium.jpg" }
            bannerAlt  = { "Drone photo of the IU stadium full of fans at a football game." }
            title      = { "Football: Indiana vs. Purdue" }
            details    = { "7:00 PM" }
            subdetails = { "Memorial Stadium" }
            links      = {[
              { title: 'Getting there', url: '#' },
              { title: 'Details',   url: '#' }
            ]}
      />

    </div>;
  }
}
