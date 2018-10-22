import React, { Component } from 'react';

import { IconMagnifyingGlass } from '../icons'

export class Toolbar extends Component {

  render() {
    return <div className="rvt-m-toolbar">
      <button
        onClick={() => alert('hey, you clicked!')}
        className="rvt-m-search-button"
      >
        <span className="rvt-sr-only">Search</span>
        { IconMagnifyingGlass }
      </button>
    </div>;
  }
}

