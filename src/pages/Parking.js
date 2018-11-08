import React, { Component } from 'react';

import { Card } from "../components";

export class Parking extends Component {

  render() {

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

      <div className="card parking-permit">
        <div className="parking-permit__campus">IU Bloomington</div>
        <div className="parking-permit__type">CH6</div>
        <div className="parking-permit__expiration">Expires 12/31/2018</div>
        <div className="parking-permit__id">BL12345689</div>
      </div>


      <h2 className="rvt-ts-23 rvt-m-top-lg">Permitted parking spaces</h2>

      <div className="rvt-grid">
        <div className="rvt-grid__item-8">
          <Card className="rvt-m-top-sm"
                title = { "McNutt Parking Lot" }
                details = "Permitted 24 hours"
                links = {[
                  { title: 'Getting there', url: '#' },
                ]}
          />
        </div>
        <div className="rvt-grid__item-4">
          <div className="parking-sign">
            <div className="parking-sign__permit">CH6</div>
            <div className="parking-sign__allowed">Permits</div>
            <div className="parking-sign__schedule">24 Hours</div>
            <div className="parking-sign__consequence">Tow Zone</div>
          </div>
        </div>
      </div>

      <div className="rvt-grid">
        <div className="rvt-grid__item-8">
          <Card className="rvt-m-top-lg"
                title = { "White Lot" }
                details = "Permitted until 11:59PM"
                links = {[
                  { title: 'Getting there', url: '#' },
                ]}
          />
        </div>
        <div className="rvt-grid__item-4">
          <div className="parking-sign rvt-m-top-lg">
            <div className="parking-sign__permit">ST</div>
            <div className="parking-sign__allowed">Permits</div>
            <div className="parking-sign__consequence">Tow Zone</div>
          </div>
        </div>
      </div>

      <div className="rvt-grid">
        <div className="rvt-grid__item-8">
          <Card className="rvt-m-top-lg"
                title = { "Fee Lane Garage" }
                details = "Permitted until 7:00AM"
                links = {[
                  { title: 'Getting there', url: '#' },
                ]}
          />
        </div>
        <div className="rvt-grid__item-4">
          <div className="parking-sign parking-sign--no-parking rvt-m-top-lg">
            <div className="parking-sign__permit">No student parking</div>
            <div className="parking-sign__schedule">7AM-5PM</div>
          </div>
        </div>
      </div>





    </div>;
  }
}
