import React, { Component } from 'react';
import 'rivet-switch/dist/css/rivet-switch.min.css';
const Switch = require('rivet-switch/dist/js/rivet-switch.min.js');

export class Settings extends Component {

  componentDidMount() {
    Switch.init()
  }

  render() {
    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-5" aria-labelledby="t-five">
      <p className="rvt-ts-23 rvt-m-top-remove rvt-m-bottom-md">App settings</p>

      <div className="cards">
        <div className="card">
          <div className="rvt-display-flex rvt-p-all-md">
            <div>Left-handed search</div>
            <div className="rvt-grid__item--last">
              <button className="rvt-switch" data-switch="email-switch" role="switch" aria-checked="false">
                <span className="rvt-switch__on">On</span>
                <span className="rvt-switch__off">Off</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="rvt-display-flex rvt-p-all-md">
            <div>Parking permit</div>
            <div className="rvt-grid__item--last">
              <select>
                <option>ST</option>
                <option>STFA</option>
                <option>STSP</option>
                <option>Evening</option>
                <option>EvenigFA</option>
                <option>EveninSP</option>
                <option>GSU</option>
                <option>EM-P</option>
                <option>EM-S</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
