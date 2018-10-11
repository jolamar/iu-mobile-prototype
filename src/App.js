import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import AppHeader from './components/AppHeader';
import Avatar from './components/Avatar';

// Icons
import IconPlus from './icons/IconPlus';
import IconChat from './icons/IconChat';
import IconPhone from './icons/IconPhone';
import IconEnvelope from './icons/IconEnvelope';
import IconMagnifyingGlass from './icons/IconMagnifyingGlass';

class App extends Component {
  render() {
    return <React.Fragment>

        <AppHeader campus="Bloomington">
          <Avatar url="http://www.fillmurray.com/g/150/150" alt="Your pretty face..." />
        </AppHeader>

        <div className="rvt-m-tabs">
          <div className="rvt-m-tabs__tablist" role="tablist" aria-label="Rivet tabs">
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-1" id="t-one">
              Home
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-2" id="t-two" tabIndex="-1">
              Classes
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-3" id="t-three" tabIndex="-1">
              Commute
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="true" data-tab="tab-4" id="t-four" tabIndex="-1">
              Help
              <span className="rvt-badge rvt-badge--success rvt-m-left-xxs">1</span>
            </button>
            <button className="rvt-m-tabs__tab" role="tab" aria-selected="false" data-tab="tab-5" id="t-five" tabIndex="-1">
              Settings
            </button>
          </div>

          <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-1" aria-labelledby="t-one" hidden>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
          </div>

          <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-2" aria-labelledby="t-two" hidden>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
          </div>

          <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three" hidden>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
            <button className="rvt-m-card rvt-m-card--empty">
              <div className="rvt-m-card__content">
                <IconPlus/>
              </div>
            </button>
          </div>

          <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-4" aria-labelledby="t-four">
            <div className="rvt-m-card">
              <div className="rvt-ts-14 rvt-m-bottom-sm">Contact us</div>
              <div className="rvt-m-card__content rvt-m-card__content--flex rvt-p-tb-sm">
                <div className="rvt-m-action">
                  <button className="rvt-m-action__icon">
                    <IconChat/>
                  </button>
                  <div className="rvt-m-action__label">
                    Chat
                  </div>
                </div>

                <div className="rvt-m-action">
                  <button className="rvt-m-action__icon">
                    <IconPhone/>
                  </button>
                  <div className="rvt-m-action__label">
                    Phone
                  </div>
                </div>

                <div className="rvt-m-action">
                  <button className="rvt-m-action__icon">
                    <IconEnvelope/>
                  </button>
                  <div className="rvt-m-action__label">
                    Email
                  </div>
                </div>

              </div>
            </div>

            <div className="rvt-m-card">
              <div className="rvt-m-card__content">
              <div className="rvt-ts-14 rvt-m-bottom-md">Help articles</div>

                <label htmlFor="search" className="rvt-sr-only">Search</label>
                <div className="rvt-input-group">
                  <input className="rvt-input-group__input" type="text" id="search" />
                  <div className="rvt-input-group__append">
                    <button className="rvt-button">
                      <span className="rvt-sr-only">Search</span>
                      <IconMagnifyingGlass/>
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
          </div>

          <div className="rvt-m-tabs__panel" tabIndex="0" role="tabpanel" id="tab-5" aria-labelledby="t-five" hidden>
            <div className="rvt-m-card">
              <div className="rvt-m-card__content">
                <div className="rvt-m-bottom-sm">Settings</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rvt-m-toolbar">
          <button
            onClick={() => alert('hey, you clicked!')}
            className="rvt-m-search-button"
          >
            <span className="rvt-sr-only">Search</span>
            <IconMagnifyingGlass/>
          </button>
        </div>
      </React.Fragment>;
  }
}

export default App;
