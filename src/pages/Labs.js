import React, { Component } from 'react';

import { Card } from "../components";

export class Labs extends Component {

  render() {
    const path = window.location.pathname
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''


    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden={path !== basepath + '/labs'}>
    
     <h2 className="rvt-ts-23 rvt-text-bold">Nearest labs</h2>

      <Card title = { "Hodge Hall 1047" }
                details = { 
                  <div><span className="rvt-alert--success">7 seats available</span></div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                ]}
      />

      <Card title = { "Hodge Hall 4055" }
                details = { 
                  <div><span className="rvt-alert--danger">Full</span></div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                ]}
      />

      <Card title = { "Hodge Hall 4057" }
                details = { 
                  <div><span className="rvt-alert--danger">Class in progress</span></div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                ]}
      />

      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-btm-md">Nearest printers</h2>

      <Card title = { "Hodge Hall" }
                details = { 
                  <div><span className="rvt-alert--success">11 printers available</span></div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                ]}
      />

      <Card title = { "SPEA" }
                details = { 
                  <div><span className="rvt-alert--success">11 printers available</span></div>
                }
                links = {[
                  { title: 'Details', url: '#' },
                ]}
      />

    </div>;
  }
}
