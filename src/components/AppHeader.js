import React, { Component } from 'react';
export class AppHeader extends Component {
  render() {
    return <div className="rvt-m-header">
        <div className="rvt-m-header__title">
          <img src="/iu.png" className="rvt-m-header__logo" alt="IU Bloomington" />
        </div>
        {this.props.children}
      </div>;
  }
}

