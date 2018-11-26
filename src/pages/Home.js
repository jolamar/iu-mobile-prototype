import React, { Component } from "react";

import { Card, Stack } from "../components";

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

    // Time
    const time = new Date();
    const hour = time.getHours()
    const morning = hour >= 4 && hour < 12
    const afternoon = hour >= 12 && hour < 17
    const evening = hour >= 17 || hour < 4

    return <div style={{overflowY: this.state.scrollY}} className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-1" aria-labelledby="t-one">

      {/* Morning time (4am - 12pm) */}

      { morning &&
      <React.Fragment>

        <p className="rvt-ts-23 rvt-m-top-remove rvt-m-bottom-md rvt-headlines">You have 2 classes today.</p>
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

        <h2 className="rvt-ts-16 rvt-m-top-xl rvt-m-bottom-md rvt-headlines">Grab breakfast</h2>
        <Stack>
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
          <Card title      = { "Gresham Food Court" }
                details    = { "Open now: 7:00 AM - 2:00 AM" }
                links      = {[
                  { title: 'Getting there', url: '#' },
                  { title: 'Details',   url: '#' }
                ]}
          />
        </Stack>

        <h2 className="rvt-ts-16 rvt-m-top-xl rvt-m-bottom-md rvt-headlines">Getting to class</h2>
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
      </React.Fragment>
      }

      {/* Afternoon (12pm - 5pm) */}

      { afternoon &&
      <React.Fragment>
        <p className="rvt-ts-16 rvt-m-top-remove rvt-m-bottom-md rvt-headlines">You have just 1 more class today.</p>
        <Card title      = { "BUS-X 400" }
              subtitle   = { "International Business Law" }
              details    = { "5:30 PM - 6:45 PM" }
              subdetails = { "Hodge Hall 1000" }
              links      = {[
                { title: 'Getting there', url: '#' },
                { title: 'Assignments',   url: '#' }
              ]}
        />


        <h2 className="rvt-ts-16 rvt-m-top-xl rvt-headlines">Grab lunch</h2>
        <Stack>
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
          <Card title      = { "Gresham Food Court" }
                details    = { "Open now: 7:00 AM - 2:00 AM" }
                links      = {[
                  { title: 'Getting there', url: '#' },
                  { title: 'Details',   url: '#' }
                ]}
          />
        </Stack>
        <h2 className="rvt-ts-16 rvt-m-top-xl rvt-m-bottom-md rvt-headlines">Getting to class</h2>
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
      </React.Fragment>
      }

      {/* Evening (5pm - 4am) */}

      { evening &&
      <React.Fragment>
        <p className="rvt-ts-16 rvt-m-bottom-md rvt-headlines">Looking for things to do?</p>
        <button className="rvt-button rvt-button--plain">View all events</button>

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


        <h2 className="rvt-ts-16 rvt-m-top-xl rvt-m-bottom-md rvt-headlines">Grab dinner</h2>
        <Stack>
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
          <Card title      = { "Gresham Food Court" }
                details    = { "Open now: 7:00 AM - 2:00 AM" }
                links      = {[
                  { title: 'Getting there', url: '#' },
                  { title: 'Details',   url: '#' }
                ]}
          />
        </Stack>

        <h2 className="rvt-ts-16 rvt-m-top-xl rvt-m-bottom-md rvt-headlines">Getting home</h2>
        <Card title      = { "Going to Stadium" }
              details    = {
                <div>
                  <div className="rvt-m-top-sm rvt-m-bottom-xs rvt-badge rvt-badge--error">A Route</div> Sample Gates<br />
                  Arrives in <span className="card__highlight--green rvt-text-bold">1 min</span> & <span className="card__highlight--green rvt-text-bold">9 mins</span>
                </div>
              }
        />


        <h2 className="rvt-ts-16 rvt-m-top-xl rvt-m-bottom-md rvt-headlines">Tomorrow's classes</h2>

        <Card title      = { "INFO-I 222" }
              subtitle   = { "The Information Society" }
              details    = { "2:45 PM - 4:00 PM" }
              links      = {[
                { title: 'Assignments',   url: '#' }
              ]}
        />

      </React.Fragment>
      }

    </div>;
  }
}
