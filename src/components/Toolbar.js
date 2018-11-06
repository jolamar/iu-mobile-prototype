import React, { Component } from 'react';

import { IconMagnifyingGlass } from '../icons'

export class Toolbar extends Component {

  render() {

    // Time
    const time = new Date();
    const hour = time.getHours()
    const morning = hour >= 4 && hour < 12
    const afternoon = hour >= 12 && hour < 17
    const evening = hour >= 17 || hour < 4

    // Name
    const firstName = 'Dwight'

    return <div className="rvt-m-toolbar">
      <div className="rvt-text-center rvt-m-toolbar__content">
        <button
          onClick={() => alert('hey, you clicked!')}
          className="rvt-m-search-button"
        >
          <span className="rvt-sr-only">Search</span>
          { IconMagnifyingGlass }
        </button>
        <p>Good { morning && 'morning' }{ afternoon && 'afternoon' }{ evening && 'evening' }, {firstName}</p>
      </div>
    </div>;
  }
}

