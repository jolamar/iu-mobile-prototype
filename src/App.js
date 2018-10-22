import React, { Component } from 'react';
import './scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import AppHeader from './components/AppHeader';
import Avatar from './components/Avatar';

// Icons
import IconPlus from './icons/IconPlus';
import IconMagnifyingGlass from './icons/IconMagnifyingGlass';


// Pages
import { Help } from './pages'

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
              Campus
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

          <Help />

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
