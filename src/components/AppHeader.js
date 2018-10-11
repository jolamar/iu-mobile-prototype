import React, { Component } from 'react';
import IconTrident from '../icons/IconTrident';

class AppHeader extends Component {
  render() {
    return <div className="rvt-m-header">
        <div className="rvt-m-header__title">
          <IconTrident />
          <span className="rvt-ts-16">
            IU <span className="rvt-text-bold">{this.props.campus}</span>
          </span>
        </div>
        {this.props.children}
      </div>;
  }
}

export default AppHeader;