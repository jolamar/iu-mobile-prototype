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

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
    
     <h2 className="rvt-ts-16 rvt-headlines rvt-m-left-md">Nearest food</h2>

     { !!foodLocations && foodLocations.map( foodLocation =>
      <Card className="rvt-m-top-sm rvt-grid" key={foodLocation}
        title = {foodLocation.xlocationlongname}
        details = {
          <div>
            <span className="rvt-ts-14 card__highlight--green rvt-text-bold">{isOpen(foodLocation)} </span> 
            <span className="rvt-ts-12 card__highlight--gray">{parseTimeToText(getHours(foodLocation))}</span>
          </div>
        }
      >
      <svg className="rvt-grid__item--last" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path fill="#006298" d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"/>
        </svg>
      </Card>
     
     )}

    </div>;
  }
}

function isOpen(location) {
  let openingHoursArray = getHours(location)
  let today = new Date()

  return "Open"
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

  let formattedDate = d.toLocaleDateString('en-GB').replace(new RegExp('/', 'g'), '-')
  let todayDate = new Date(formattedDate + 'T ' + closing1 +'Z')


  let openingTime1 = new Date("2000-01-01T" + opening1 + 'Z')
  let closingTime1 = new Date("2000-01-01T" + closing1 + 'Z')
  let openingTime2 = new Date("2000-01-01T" + opening2 + 'Z')
  let closingTime2 = new Date("2000-01-01T" + closing2 + 'Z')

  let openingHoursArray = [openingTime1.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute:'2-digit' }), 
                        closingTime1.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute:'2-digit' }), 
                        openingTime2.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute:'2-digit' }), 
                        closingTime2.toLocaleTimeString('en-US', { timeZone: 'UTC', hour: '2-digit', minute:'2-digit' })]

  return openingHoursArray
}

function parseTimeToText(hoursArray) {
  if (hoursArray[0] == "Invalid Date") {
    return "Closed today"
  } else if (hoursArray[2] == "Invalid Date") {
    return hoursArray[0] + ' – ' + hoursArray[1]
  } else {
    return hoursArray[0] + ' – ' + hoursArray[1] + ', ' + hoursArray[2] + ' – ' + hoursArray[3]
  }
}