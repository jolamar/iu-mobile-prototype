import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class SubHeader extends Component {
  render() {
    const props = this.props
    return <div className="rvt-m-header rvt-m-subheader">
      <button onClick={() =>props.location.pathname.includes('/bus/live') ? props.history.go(-2) : props.history.goBack()} className={"rvt-button rvt-button--plain"}>Back</button>
      <div className="rvt-m-header__title rvt-m-subheader__title">
        <span className="rvt-ts-16">
            <span className="rvt-text-bold">{props.title}</span>
          </span>
      </div>
      {props.children}
    </div>;
  }
}

export default withRouter(SubHeader)


