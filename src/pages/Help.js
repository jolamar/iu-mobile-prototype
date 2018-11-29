import React, { Component } from 'react';

// Icons
import { IconChat, IconPhone, IconEnvelope, IconMagnifyingGlass } from "../icons";
import {SectionLabel} from "../components/SectionLabel";

export class Help extends Component {

  render() {
    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-4" aria-labelledby="t-four">
      <div className="rvt-m-card">
        <SectionLabel className="rvt-m-bottom-sm">Contact us</SectionLabel>
        <div className="rvt-m-card__content rvt-m-card__content--flex rvt-p-tb-sm">
          <div className="rvt-m-action">
            <button className="rvt-m-action__icon">
              { IconChat }
            </button>
            <div className="rvt-m-action__label">
              Chat
            </div>
          </div>

          <div className="rvt-m-action">
            <button className="rvt-m-action__icon">
              { IconPhone }
            </button>
            <div className="rvt-m-action__label">
              Phone
            </div>
          </div>

          <div className="rvt-m-action">
            <button className="rvt-m-action__icon">
              { IconEnvelope }
            </button>
            <div className="rvt-m-action__label">
              Email
            </div>
          </div>

        </div>
      </div>

      <div className="rvt-m-card">
        <div className="rvt-m-card__content">
          <SectionLabel className="rvt-ts-14 rvt-m-bottom-md">Help articles</SectionLabel>

          <label htmlFor="search" className="rvt-sr-only">Search</label>
          <div className="rvt-input-group">
            <input className="rvt-input-group__input" type="text" id="search" />
            <div className="rvt-input-group__append">
              <button className="rvt-button">
                <span className="rvt-sr-only">Search</span>
                { IconMagnifyingGlass }
              </button>
            </div>
          </div>

          <ol className="rvt-m-feed">
            <li className="rvt-m-feed__item">
              <a href="https://kb.iu.edu">Contact my Advisor</a>
            </li>
            <li className="rvt-m-feed__item">
              <a href="https://kb.iu.edu">Find the bus schedule</a>
            </li>
            <li className="rvt-m-feed__item">
              <a href="https://kb.iu.edu">Connect to WIFI</a>
            </li>
            <li className="rvt-m-feed__item">
              <a href="https://kb.iu.edu">Holiday break schedule</a>
            </li>
            <li className="rvt-m-feed__item">
              <a href="https://kb.iu.edu">Dining halls</a>
            </li>
            <li className="rvt-m-feed__item">
              <a href="https://kb.iu.edu">Computer labs</a>
            </li>
          </ol>

        </div>
      </div>
    </div>;
  }
}
