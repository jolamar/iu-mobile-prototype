import React, { Component } from 'react';
import {IconMagnifyingGlass} from "../icons";
export class AppHeader extends Component {
  render() {
    const props = this.props
    return <React.Fragment>
      <div className="rvt-m-header">
        <div className="rvt-m-header__title">
          <img src="/iu.png" className="rvt-m-header__logo" alt="IU Bloomington" />
        </div>
        {props.children}
      </div>
      {!props.searchOpen && props.searchBar &&
        <div className="rvt-p-lr-lg rvt-p-bottom-md rvt-background--white rvt-m-header__search">
          <div className="rvt-input-group">
            <input placeholder="Search for tasks, help, and people" className="rvt-ts-12 rvt-p-left-sm rvt-input-group__input" type="text" id="search" />
            <div className="rvt-input-group__append">
              <button className="rvt-button">{IconMagnifyingGlass}</button>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  }
}

