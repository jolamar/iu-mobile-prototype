import React, { Component } from "react";

import { Card } from "../components";

export class Home extends Component {

  render() {
    // Path
    const path = window.location.pathname
    const basepath = '/iu-mobile-prototype'

    // Name
    const firstName = 'Dwight'

    // Time
    const time = new Date();
    const hour = time.getHours()
    const morning = hour >= 4 && hour < 12
    const afternoon = hour >= 12 && hour < 17
    const evening = hour >= 17 || hour < 4
    console.log(`The hour is ${hour}\nIt's morning time: ${morning}\nIt's afternoon: ${afternoon}\nIt's evening: ${evening}`)

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-1" aria-labelledby="t-one" hidden={path !== basepath + '/'}>

      {/* Morning time (4am - 12pm) */}

      { morning &&
      <React.Fragment>
        <h2 className="rvt-ts-23 rvt-text-bold">Good morning, { firstName }.</h2>
        <p className="rvt-ts-23 rvt-m-top-remove rvt-m-bottom-md">You have 2 classes today.</p>
        <div className="scrollable">
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
        </div>

        <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-bottom-md">Grab breakfast</h2>

        <div className="scrollable">
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
        </div>

        <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-bottom-md">Getting to class</h2>


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
      </React.Fragment>
      }

      {/* Afternoon (12pm - 5pm) */}

      { afternoon &&
      <React.Fragment>
        <h2 className="rvt-ts-23 rvt-text-bold">Good afternoon, { firstName }.</h2>
        <p className="rvt-ts-23 rvt-m-top-remove rvt-m-bottom-md">You have just 1 more class today.</p>

        <Card title      = { "BUS-X 400" }
              subtitle   = { "International Business Law" }
              details    = { "5:30 PM - 6:45 PM" }
              subdetails = { "Hodge Hall 1000" }
              links      = {[
                { title: 'Getting there', url: '#' },
                { title: 'Assignments',   url: '#' }
              ]}
        />


        <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl">Grab lunch</h2>

        <div className="scrollable">

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

        </div>

        <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-bottom-md">Getting to class</h2>


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
      </React.Fragment>
      }

      {/* Evening (5pm - 4am) */}

      { evening &&
      <React.Fragment>
        <h2 className="rvt-ts-23 rvt-text-bold">Good evening, { firstName }.</h2>
        <p className="rvt-ts-23 rvt-m-top-remove rvt-m-bottom-md">Looking for things to do?</p>


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


        <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-bottom-md">Grab dinner</h2>

        <div className="scrollable">
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
        </div>

        <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-bottom-md">Getting home</h2>


        <Card title      = { "Going to Stadium" }
              details    = {
                <div>
                  <div className="rvt-m-top-sm rvt-m-bottom-xs rvt-badge rvt-badge--error">A Route</div> Sample Gates<br />
                  Arrives in <span className="rvt-alert--success">1 min</span> & <span className="rvt-alert--success">9 mins</span>
                </div>
              }
        />


        <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-bottom-md">Tomorrow's classes</h2>

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
