import React, { Component } from 'react';

// Icons
import { IconPlus } from "../icons";

export class Campus extends Component {

  render() {
    return <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-2" aria-labelledby="t-two" hidden>
      <button className="rvt-m-card rvt-m-card--empty">
        <div className="rvt-m-card__content">
          { IconPlus }
        </div>
      </button>
      <button className="rvt-m-card rvt-m-card--empty">
        <div className="rvt-m-card__content">
          { IconPlus }
        </div>
      </button>
      <button className="rvt-m-card rvt-m-card--empty">
        <div className="rvt-m-card__content">
          { IconPlus }
        </div>
      </button>
    </div>;
  }
}
