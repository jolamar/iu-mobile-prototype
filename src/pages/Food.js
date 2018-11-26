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
    let foodLocations = this.state.foodLocations.elements
    if(foodLocations) {
      foodLocations = foodLocations.filter(location => location.xlocationpartof === "ZCafe")
    } else {
      foodLocations = []
    }

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
    
     <h2 className="rvt-ts-23 rvt-text-bold">Food Courts</h2>

     { !!foodLocations && foodLocations.map( foodLocation =>
      <Card className="rvt-m-top-sm" key={foodLocation}
        title = {foodLocation.xlocationlongname}
        details = {
          <div className="card__highlight--green rvt-text-bold">
            Open until {getHours(foodLocation)}
          </div>
        }
        links = {[
          { title: 'Details', url: '/locationDetail' }
        ]}  
      >
      </Card>
     
     )}

    </div>;
  }
}

function getHours(location) {
  let d = new Date()
  let day = d.getDay()

  let closing1

  switch(day) {
    case 0:
      closing1 = location.hourssundayend1
      break;
    case 1:
      closing1 = location.hoursmondayend1
      break;
    case 2:
      closing1 = location.hourstuesdayend1
      break;
    case 3:
      closing1 = location.hourswednesdayend1
      break;
    case 4:
      closing1 = location.hoursthursdayend1
      break;
    case 5:
      closing1 = location.hoursfridayend1
      break;
    case 6:
      closing1 = location.hourssaturdayend1
      break;
    default:
      break;
  }

  let time = new Date("2000-01-01T" + closing1 + 'Z')
  return time.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute:'2-digit' })

}