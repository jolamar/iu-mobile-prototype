import React, { Component } from 'react';
import '../scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import Slider from "react-slick";

// Pages
import { Bus, Campus, Classes, Help, Home, Labs, Settings } from '../pages'

// Routing
import { Link, withRouter } from "react-router-dom";

const pages = ['/', '/classes', '/campus', '/help', '/settings']

class Tabs extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
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
    this.setCurrentPage = this.setCurrentPage.bind(this)
    this.goToPage = this.goToPage.bind(this)
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

  componentDidMount() {
    const currentUrl = this.props.location.pathname
    if(pages.indexOf(currentUrl) !== -1) {
      this.goToPage(pages.indexOf(currentUrl))
    }
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

  setCurrentPage(oldIndex, newIndex) {
    this.panel.scrollTo(0, 0)
    this.setState({currentPage: newIndex})
    this.props.history.push(pages[newIndex])
  }

  goToPage(index) {
    this.setState({currentPage: index})
    this.slider.slickGoTo(index)
  }

  render() {

    // Scroller settings
    const settings = {
      arrows: false,
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const currentPage = this.state.currentPage

    return <React.Fragment>
        <div className="rvt-m-tabs">

          <div className="rvt-m-tabs__tablist" role="tablist" aria-label="Rivet tabs">
            <Link onClick={()=>this.goToPage(0)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 0} to="/">Home</Link>
            <Link onClick={()=>this.goToPage(1)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 1} to="/classes">Classes</Link>
            <Link onClick={()=>this.goToPage(2)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 2} to="/campus">Campus</Link>
            <Link onClick={()=>this.goToPage(3)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 3} to="/help">Help</Link>
            <Link onClick={()=>this.goToPage(4)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 4} to="/settings">Settings</Link>
          </div>

          <div ref={(ref) => this.panel = ref} class="rvt-m-tabs__panel" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
            <Slider ref={slider => (this.slider = slider)} beforeChange={this.setCurrentPage} {...settings}>
              <Home />
              <Classes />
              <Campus />
              <Help />
              <Settings />
            </Slider>
          </div>

        </div>
      </React.Fragment>;
  }
}

export default withRouter(Tabs);
