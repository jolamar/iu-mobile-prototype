import React, { Component } from 'react';

import { Card } from "../components";

import axios from 'axios';
import { format } from 'path';

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
    console.log(foodLocations)

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
      >
      </Card>
     
     )}

    </div>;
  }
}

function getHours(location) {
  var d = new Date()
  var day = d.getDay()

  let opening1, closing1, opening2, closing2

  switch(day) {
    case 0:
      opening1 = location.hourssundaybegin1
      closing1 = location.hourssundayend1
      opening2 = location.hourssundaybegin2
      closing2 = location.hourssundayend2
      break;
    case 1:
      opening1 = location.hoursmondaybegin1
      closing1 = location.hoursmondayend1
      opening2 = location.hoursmondaybegin2
      closing2 = location.hoursmondayend2
      break;
    case 2:
      opening1 = location.hourstuesdaybegin1
      closing1 = location.hourstuesdayend1
      opening2 = location.hourstuesdaybegin2
      closing2 = location.hourstuesdayend2
      break;
    case 3:
      opening1 = location.hourswednesdaybegin1
      closing1 = location.hourswednesdayend1
      opening2 = location.hourswednesdaybegin2
      closing2 = location.hourswednesdayend2
      break;
    case 4:
      opening1 = location.hoursthursdaybegin1
      closing1 = location.hoursthursdayend1
      opening2 = location.hoursthursdaybegin2
      closing2 = location.hoursthursdayend2
      break;
    case 5:
      opening1 = location.hoursfridaybegin1
      closing1 = location.hoursfridayend1
      opening2 = location.hoursfridaybegin2
      closing2 = location.hoursfridayend2
      break;
    case 6:
      opening1 = location.hourssaturdaybegin1
      closing1 = location.hourssaturdayend1
      opening2 = location.hourssaturdaybegin2
      closing2 = location.hourssaturdayend2
      break;
  }

  let formattedDate = d.toLocaleDateString('en-GB').replace(new RegExp('/', 'g'), '-')
  let todayDate = new Date(formattedDate + 'T ' + closing1 +'Z')


  let time = new Date("2000-01-01T" + closing1 + 'Z')
  return time.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute:'2-digit' })
}