import React, { Component } from 'react';

export class Settings extends Component {

  render() {
    const path = window.location.pathname
    const basepath = process.env.NODE_ENV === 'production' ? '/iu-mobile-prototype' : ''

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-5" aria-labelledby="t-five" hidden={path !== basepath + '/settings'}>
      <div className="rvt-m-card">
        <div className="rvt-m-card__content">
          <div className="rvt-m-bottom-sm">Settings</div>
        </div>
      </div>
    </div>;
  }
}