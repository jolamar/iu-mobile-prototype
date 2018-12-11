import React, { Component } from 'react';

import Slider from "react-slick";

export class Scroller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollY: 'scroll',
            distY: 0,
            distX: 0,
            startY: 0,
            startX: 0,
            touchStart: new Date().getTime(),
            isHorizontalSwipe: false,
            isVerticalSwipe: false
        }
        this.handleTouchStart = this.handleTouchStart.bind(this)
        this.handleTouchMove = this.handleTouchMove.bind(this)
        this.handleTouchEnd = this.handleTouchEnd.bind(this)
        this.disableScrollY = this.disableScrollY.bind(this)
        this.enableScrollY = this.enableScrollY.bind(this)
    }

    disableScrollY() {
        if(typeof this.props.disableScrollY === 'function') {
            this.props.disableScrollY()
        }
    }

    enableScrollY() {
        if(typeof this.props.enableScrollY === 'function') {
            this.props.enableScrollY()
        }
    }


    handleTouchStart(e) {
        e.preventDefault()
        let touchobj = e.changedTouches[0]

        this.setState({
            startY: touchobj.pageY,
            startX: touchobj.pageX,
            touchStart: new Date().getTime(),
            distX: 0,
            distY: 0,
            isHorizontalSwipe: false,
            isVerticalSwipe: false
        })


    }

    handleTouchEnd(e) {

        let touchobj = e.changedTouches[0]

        let distY = Math.abs(touchobj.pageY - this.state.startY)
        let distX = Math.abs(touchobj.pageX - this.state.startX)

        let isHorizontalSwipe = (distX >= 50 && distY <= 100)
        let isVerticalSwipe = (distY >= 50 && distX <= 100)

        this.setState({
            isHorizontalSwipe,
            isVerticalSwipe,
            distY,
            distX
        })

        if(isHorizontalSwipe) {
            this.disableScrollY()
        }

        setTimeout(function() {
            this.enableScrollY()
        }.bind(this), 500)

        e.preventDefault()
    }

    handleTouchMove(e) {
        e.preventDefault()
    }

    render() {

        // Scroller settings
        const settings = {
            arrows: false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true
        };

        return <div onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
            <Slider {...settings}>
                {this.props.children}
            </Slider>
        </div>;
    }
}

