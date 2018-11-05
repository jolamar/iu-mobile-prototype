import React, { Component } from 'react';

export class SubHeader extends Component {
  render() {
    return <div className="rvt-m-header rvt-m-subheader">
      <a href="/campus" className={"rvt-button rvt-button--plain"}>Back</a>
      <div className="rvt-m-header__title rvt-m-subheader__title">
        <span className="rvt-ts-16">
            <span className="rvt-text-bold">{this.props.title}</span>
          </span>
      </div>
      {this.props.children}
    </div>;
  }
}

