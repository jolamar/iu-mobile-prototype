import React, { Component } from 'react';

import { Card } from "../components";

export class CrimsonCard extends Component {

  render() {

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

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

    </div>;
  }
}
