import React, { Component } from 'react';

import { Card } from "../components";

import axios from 'axios';
const rootURL = 'https://mobileprototype.indiana.edu';

export class Locations extends Component {

    constructor(props) {
        super(props)
        this.state = {
            buildings: []
        };

    }

    componentDidMount() {
        let vm = this
        axios(rootURL + '/api/buildings')
            .then((res) => {
                vm.setState({buildings: res.data})
            })
    }

    render() {

        const buildings = this.state.buildings
        const position = this.props.position

        const description = (descr) => {
            return descr.substr(0,descr.indexOf('------------------------------------------------------'));
        }

        return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

            <h2 className="rvt-ts-23 rvt-text-bold">Locations</h2>

            { !!buildings && buildings.map(building =>
                <Card key={building.id + building.name}
                      title = {building.name}
                      className="rvt-m-top-xs rvt-p-all-sm"
                >
                    {/*building.picture && <div className="card__detail rvt-ts-12"><img src={building.picture.replace('http://', 'https://')} alt={building.Name} /></div>*/}
                    {building.description && <div className="card__detail rvt-ts-12 building-description" dangerouslySetInnerHTML={{__html: description(building.description)}}></div>}
                    {building.longitude !== 0 && <div className="card__detail rvt-ts-12">Coordinates: { building.latitude }, { building.longitude }</div>}
                    {building.longitude !== 0 && position && position.coords && position.coords.longitude && <div className="card__detail rvt-ts-12">Distance: { this.props.getDistance(position.coords.latitude, position.coords.longitude, building.latitude, building.longitude) } miles</div>}
                </Card>
            )}

        </div>;
    }
}