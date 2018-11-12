import React, { Component } from 'react';

import { Card } from "../components";

import axios from 'axios';

export class Food extends Component {

  constructor(props) {
    super(props)
    this.state = {
      foodLocations: []
    };
  }

  componentDidMount() {
    let vm = this
    axios('/diningLocations.json')
      .then((res) => {
        vm.setState({foodLocations: res.data})
      })
  }

  render() {

    var foodLocations = this.state.foodLocations.elements
    foodLocations = foodLocations.filter(location => location.xlocationpartof == "ZCafe")

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
    
     <h2 className="rvt-ts-23 rvt-text-bold">Food Courts</h2>

     { !!foodLocations && foodLocations.map( foodLocation =>
      <Card className="rvt-m-top-sm" key={foodLocation}
        title = {foodLocation.xlocationlongname}
      >
      </Card>
     
     )}

    </div>;
  }
}