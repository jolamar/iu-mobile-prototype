import React, { Component } from 'react';

// Icons
import { IconPlus } from "../icons";

export class Classes extends Component {

  render() {
    return <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden>
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
