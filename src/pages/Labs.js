import React, { Component } from 'react'
import { Card } from "../components"
import axios from 'axios'

export class Labs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buildings: [],
            labs: [],
            printers: [],
            nearestBuildings: []
        }

        this.lookupBuilding = this.lookupBuilding.bind(this)
    }

    lookupBuilding(code) {
        const buildings = this.state.buildings
        let building = buildings.find(building => { return code === building.Code } )

        // Music is the only building with 1 letter code
        if(!building && code[0] === 'M') {
            building = buildings.find(building => { return 'M' === building.Code } )
        }

        return building ? building.Name : code
    }

    // parse information from the printer string
    // floor, room, building and name of printer
    calculatePrinters(printers) {

        let calculated = []
        printers.map(p => {

            // remove BL
            let printer = p.replace('BL_', '').replace('BL-', '')

            // get the two letter building code
            let building = printer.substr(0,2)
            building = this.lookupBuilding(building)

            let room = printer.match(/^\d+|\d+\b|\d+(?=\w)/g)[0]

            let floor = room[0]

            calculated.push({ floor: floor,  name: printer, building: building, room: room })

            return true
        })

        return calculated
    }


    getFloorCount(building, floor) {
        let printers = this.state.printers
        let found = printers.filter(printer => printer.building === building && printer.floor === floor)
        return found ? found.length : 0
    }

    anyPrinters(building) {
        return this.getFloorCount(building.Name, 0) > 0 ||
            this.getFloorCount(building.Name, 1) > 0 ||
            this.getFloorCount(building.Name, 2) > 0 ||
            this.getFloorCount(building.Name, 3) > 0 ||
            this.getFloorCount(building.Name, 4) > 0
    }

    componentDidMount() {
        const customerKey = process.env['REACT_APP_LABSTATS_CUSTOMER_ID']
        const vm = this
        axios(process.env['REACT_APP_LABSTATS_API_URL'], { headers: {"Authorization": customerKey} })
            .then((res) => {
                // [0] is IUB with 53 labs
                vm.setState({ labs: res.data[0].ChildrenGroups })
            })

        axios('/buildingCodes.json')
            .then((res) => {
                let buildings = res.data
                vm.setState({buildings})
            })

        axios('/printers.json')
            .then((res) => {
                let printers = this.calculatePrinters(res.data)
                vm.setState({printers})
            })

    }

    render() {
        let buildings = this.state.buildings

        return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

            <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-xl rvt-m-btm-md">Nearest printers</h2>

            {
                buildings.map((building,index) => {
                    return this.anyPrinters(building) && <Card key={building.Name} className="rvt-m-top-lg"
                                                               title = { building.Name }
                                                               details = {
                                                                   <div className="rvt-grid">
                                                                       { this.getFloorCount(building.Name, 0) > 0 &&
                                                                       <div className="rvt-grid__item-6 rvt-m-top-sm">Ground Floor<br />
                                                                           <span className={`card__highlight--${this.getFloorCount(building.Name, 0) > 0 ? 'green rvt-text-bold' : ''}`}>{this.getFloorCount(building.Name, 0)} printer{this.getFloorCount(building.Name, 0) > 1 ? 's' : ''}</span>
                                                                       </div>
                                                                       }
                                                                       { this.getFloorCount(building.Name, 1) > 0 &&
                                                                       <div className="rvt-grid__item-6 rvt-m-top-sm">1st Floor<br />
                                                                           <span className={`card__highlight--${this.getFloorCount(building.Name, 1) > 0 ? 'green rvt-text-bold' : ''}`}>{this.getFloorCount(building.Name, 1)} printer{this.getFloorCount(building.Name, 1) > 1 ? 's' : ''}</span>
                                                                       </div>
                                                                       }
                                                                       { this.getFloorCount(building.Name, 2) > 0 &&
                                                                       <div className="rvt-grid__item-6 rvt-m-top-sm">2nd Floor<br />
                                                                           <span className={`card__highlight--${this.getFloorCount(building.Name, 2) > 0 ? 'green rvt-text-bold' : ''}`}>{this.getFloorCount(building.Name, 2)} printer{this.getFloorCount(building.Name, 2) > 1 ? 's' : ''}</span>
                                                                       </div>
                                                                       }
                                                                       { this.getFloorCount(building.Name, 3) > 0 &&
                                                                       <div className="rvt-grid__item-6 rvt-m-top-sm">3rd Floor<br />
                                                                           <span className={`card__highlight--${this.getFloorCount(building.Name, 3) > 0 ? 'green rvt-text-bold' : ''}`}>{this.getFloorCount(building.Name, 3)} printer{this.getFloorCount(building.Name, 3) > 1 ? 's' : ''}</span>
                                                                       </div>
                                                                       }
                                                                       { this.getFloorCount(building.Name, 4) > 0 &&
                                                                       <div className="rvt-grid__item-6 rvt-m-top-sm">4th Floor<br />
                                                                           <span className={`card__highlight--${this.getFloorCount(building.Name, 4) > 0 ? 'green rvt-text-bold' : ''}`}>{this.getFloorCount(building.Name, 4)} printer{this.getFloorCount(building.Name, 4) > 1 ? 's' : ''}</span>
                                                                       </div>
                                                                       }
                                                                   </div>
                                                               }
                                                               links = {[
                                                                   { title: 'Details', url: '#' },
                                                               ]}
                    />
                })
            }


            <h2 className="rvt-ts-23 rvt-text-bold rvt-m-top-lg">Nearest labs</h2>

            {this.state.labs.map((building, index) =>
                <React.Fragment key={index}>

                    <h3 className={`rvt-ts-20 rvt-text-bold ${index > 0 ? 'rvt-m-top-xxl' : 'rvt-m-top-md'}`}>{ building.GroupName }</h3>
                    { building.ChildrenGroups.map(lab =>
                        <Card key={lab.GroupName} className="rvt-m-top-lg"
                              title = { lab.GroupName }
                              details = {
                                  <div><span className={`card__highlight--${lab.Available === 0 ? 'red' : 'green'} rvt-text-bold`}>{lab.Available} seats available</span></div>
                              }
                              links = {[
                                  { title: 'Details', url: '#' },
                              ]}
                        />) }
                </React.Fragment>
            )}


            <h2 className="rvt-ts-23 rvt-text-bold">Nearest labs</h2>

            <Card className="rvt-m-top-lg"
                  title = { "Hodge Hall 1047" }
                  details = {
                      <div><span className="card__highlight--green rvt-text-bold">7 seats available</span></div>
                  }
                  links = {[
                      { title: 'Details', url: '#' },
                  ]}
            />

            <Card className="rvt-m-top-sm"
                  title = { "Hodge Hall 4055" }
                  details = {
                      <div><span className="card__highlight--red rvt-text-bold">Full</span></div>
                  }
                  links = {[
                      { title: 'Details', url: '#' },
                  ]}
            />

            <Card className="rvt-m-top-sm"
                  title = { "Hodge Hall 4057" }
                  details = {
                      <div><span className="card__highlight--red rvt-text-bold">Class in progress</span></div>
                  }
                  links = {[
                      { title: 'Details', url: '#' },
                  ]}
            />



        </div>
    }
}
