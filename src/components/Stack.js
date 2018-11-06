import React, { Component } from 'react';

export class Stack extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: true
    }
    this.toggleStack = this.toggleStack.bind(this)
  }

  toggleStack() {
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    const collapsed = this.state.collapsed
    return <React.Fragment>
      <div aria-expanded={!collapsed} className="card-stack" onClick={this.toggleStack}>
          {this.props.children}
      </div>
      <div className="rvt-text-center">
        <button className="rvt-button--plain card-stack__toggle rvt-ts-12 rvt-p-tb-sm" onClick={this.toggleStack}>Tap to {collapsed ? 'expand' : 'collapse' }</button>
      </div>
    </React.Fragment>
  }
}

