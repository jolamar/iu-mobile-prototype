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

            <button className="rvt-m-top-md rvt-m-bottom-xl rvt-alert rvt-alert--button rvt-display-flex rvt-alert--warning rvt-m-bottom-md" role="alertdialog" aria-labelledby="warning-alert-title">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <g fill="currentColor">
                        <path d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2Z"/>
                        <path d="M8,9A1,1,0,0,1,7,8V5A1,1,0,0,1,9,5V8A1,1,0,0,1,8,9Z"/>
                        <circle cx="8" cy="11" r="1"/>
                    </g>
                </svg>
                <h1 className="rvt-alert__title" id="warning-alert-title">You have 1 unpaid citation.</h1>
                <svg className="rvt-grid__item--last" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"/>
                </svg>
            </button>


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
