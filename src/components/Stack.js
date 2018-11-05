import React, { Component } from 'react';
import {Card} from "./Card";

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
    return <div aria-expanded={!collapsed} className="card-stack" onClick={this.toggleStack}>
        {this.props.children}

      <div className="rvt-text-center">
        <button className="rvt-button--plain card-stack__toggle rvt-ts-12 rvt-p-tb-sm">Tap to {collapsed ? 'expand' : 'collapse' }</button>
      </div>
    </div>;
  }
}

