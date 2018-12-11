import React, { Component } from 'react';
import 'rivet-collapsible/dist/css/rivet-collapsible.min.css';
const C = require('rivet-collapsible/dist/js/rivet-collapsible.min.js');
let idx = 0;
const uuid = () => idx++;

export class Collapsible extends Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: true
        }
        this.toggleCollapse = this.toggleCollapse.bind(this)
    }

    toggleCollapse() {
        setTimeout(function() {
            // set the height of .slick-list to the height of .slick-current
            let currentHeight = document.querySelector('.slick-current').scrollHeight;
            let slickList = document.querySelector('.slick-list')
            slickList.style.height = currentHeight + 'px'
        }, 200)
        this.setState({collapsed: !this.state.collapsed})
    }

    componentDidMount() {
        C.init();
    }

    render() {
        const id = 'collapsible-' + uuid()
        const children = this.props.children
        return <React.Fragment>
            <div className="rvt-collapsible">

                {React.Children.map(children, (child, i) => {
                    const props = child.props

                    if(child.type === 'a') {
                        return <React.Fragment>
                            <h1 className="rvt-collapsible__title">
                                <button onClick={()=>{ window.location.href = props.href }}>
                                    <span className="rvt-ts-12"><strong>{props.title}</strong></span>
                                    <svg className="rvt-grid__item--last" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fill="currentColor"
                                              d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"/>
                                    </svg>
                                </button>
                            </h1>
                        </React.Fragment>
                    }

                    return <React.Fragment>
                        <h1 className="rvt-collapsible__title">
                            <button onClick={this.toggleCollapse} data-collapsible={id + i} aria-expanded="false">
                                <span className="rvt-ts-12"><strong>{props.title}</strong> {props.details && <span className="rvt-m-left-sm rvt-color-gray">{props.details.replace("Open now: ", "")}</span>}{props.label && <span className="rvt-m-left-sm rvt-color-gray">{props.label.replace("Open now: ", "")}</span>}</span>
                                <svg className="rvt-grid__item--last" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fill="currentColor"
                                          d="M5.5,15a1,1,0,0,1-.77-1.64L9.2,8,4.73,2.64A1,1,0,0,1,6.27,1.36L11.13,7.2a1.25,1.25,0,0,1,0,1.61L6.27,14.64A1,1,0,0,1,5.5,15ZM9.6,8.48h0Zm0-1h0Z"/>
                                </svg>
                            </button>
                        </h1>
                        <div className="rvt-collapsible__content" id={id + i} aria-hidden="true">
                            {child}
                        </div>
                    </React.Fragment>
                })
                }


            </div>
        </React.Fragment>
    }
}

