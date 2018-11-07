import React, { Component } from 'react';

import { Card } from "../components";

export class Labs extends Component {

  render() {

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
    
     <h2 className="rvt-ts-23 rvt-text-bold">Nearest labs</h2>

      <Card className="rvt-m-top-lg"
            title = { "Hodge Hall 1047" }
            details = {
              <div><span className="card__highlight--green rvt-text-bold">7 seats available</span></div>
            }
            links = {[
              { title: 'Details', url: '#' },
            ]}
      />

      <Card className="rvt-m-top-sm"
            title = { "Hodge Hall 4055" }
            details = {
              <div><span className="card__highlight--red rvt-text-bold">Full</span></div>
            }
            links = {[
              { title: 'Details', url: '#' },
            ]}
      />

      <Card className="rvt-m-top-sm"
            title = { "Hodge Hall 4057" }
            details = {
              <div><span className="card__highlight--red rvt-text-bold">Class in progress</span></div>
            }
            links = {[
              { title: 'Details', url: '#' },
            ]}
      />

      <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-btm-md">Nearest printers</h2>

      <Card className="rvt-m-top-lg"
            title = { "Hodge Hall" }
            details = {
              <div><span className="card__highlight--green rvt-text-bold">11 printers available</span></div>
            }
            links = {[
              { title: 'Details', url: '#' },
            ]}
      />

      <Card className="rvt-m-top-sm"
            title = { "SPEA" }
            details = {
              <div><span className="card__highlight--green rvt-text-bold">11 printers available</span></div>
            }
            links = {[
              { title: 'Details', url: '#' },
            ]}
      />

    </div>;
  }
}
