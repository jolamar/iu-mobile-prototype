import React, { Component } from 'react';

import { Card } from "../components";

export class Bus extends Component {

  render() {
    const path = window.location.pathname
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''


    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden={path !== basepath + '/bus'}>

      <div class="rvt-alert rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby="success-alert-title">
          <h1 class="rvt-alert__title" id="success-alert-title">Bus service suspended tomorrow morning</h1>
          <p class="rvt-alert__message">Tomorrow is the Jill Behrman Color the Campus 5k. During this event we will not be running any bus service. We expect to start service around 1:30 tomorrow. We apologize for the inconvenience.</p>
      </div>

      <Card title = { 
                <div>
                  <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--aroute">A Route</div> Stadium<br />
                </div> }
                details = { 
                <div>
                  Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
                </div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                  { title: 'Live View', url: '#' },
                ]}
      />

      <Card title = { 
                <div>
                  <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--broute">B Route</div> Fisher Court<br />
                </div> }
                details = { 
                <div>
                  Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
                </div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                  { title: 'Live View', url: '#' },
                ]}
      />

      <Card title = { 
                <div>
                  <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--eroute">E Route</div> Eigenmann<br />
                </div> }
                details = { 
                <div>
                  Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
                </div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                  { title: 'Live View', url: '#' },
                ]}
      />   

      <Card title = { 
                <div>
                  <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--wroute">W Route</div> Stadium<br />
                </div> }
                details = { 
                <div>
                  Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
                </div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                  { title: 'Live View', url: '#' },
                ]}
      />

      <Card title = { 
                <div>
                  <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--wlimited">W Limited</div> Stadium<br />
                </div> }
                details = { 
                <div>
                  Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
                </div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                  { title: 'Live View', url: '#' },
                ]}
      />

      <Card title = { 
                <div>
                  <div className="rvt-m-top-remove rvt-m-bottom-xs rvt-badge rvt-badge--nightowl">Night Owl</div> Stadium<br />
                </div> }
                details = { 
                <div>
                  Departs in <span className="rvt-alert--success">2 mins</span> & <span className="rvt-alert--success">7 mins</span>
                </div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                  { title: 'Live View', url: '#' },
                ]}
      />
    </div>;
  }
}
