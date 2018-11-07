import React, { Component } from 'react';

import { Card } from "../components";

import axios from 'axios';

export class Locations extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buildings: []
    };

  }

  componentDidMount() {
    let vm = this
    axios('/buildingCodes.json')
      .then((res) => {
        vm.setState({buildings: res.data})
      })
  }

  render() {

    const buildings = this.state.buildings
    console.log(buildings)

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
    
      <h2 className="rvt-ts-23 rvt-text-bold">Locations</h2>

      { !!buildings && buildings.map(building =>
        <Card key={building.id + building.Name}
              title = {building.Name}
              className="rvt-m-top-xs rvt-p-all-sm"
        >
          <div className="card__detail rvt-ts-12">{ building.Code }</div>
        </Card>
      )}

    </div>;
  }
}