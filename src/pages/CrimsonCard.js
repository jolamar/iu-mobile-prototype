import React, { Component } from 'react';

import { Card } from "../components";

export class CrimsonCard extends Component {

    render() {

        return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

            <h2 className="rvt-ts-23 rvt-m-top-lg">Your Account</h2>

            <Card className="rvt-m-top-sm"
                  title = { "2018-2019 Academic Year I-BUCKS 25" }
                  details = {
                      <div><span className="card__highlight--green rvt-text-bold rvt-ts-29">56.31</span></div>
                  }
                  links = {[
                      { title: 'Details', url: '#' },
                  ]}
            />

            <Card className="rvt-m-top-sm"
                  title = { "IU Print Allotment" }
                  details = {
                      <div><span className="card__highlight--green rvt-text-bold rvt-ts-29">19.91</span></div>
                  }
                  links = {[
                      { title: 'Details', url: '#' },
                  ]}
            />

        </div>;
    }
}
