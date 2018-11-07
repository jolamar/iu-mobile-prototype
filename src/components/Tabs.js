import React, { Component } from 'react';
import '../scss/styles.scss';
import 'rivet-uits/js/rivet.min.js';

import Slider from "react-slick";

// Pages
import { Campus, Classes, Help, Home, Settings } from '../pages'

// Routing
import { Link, withRouter } from "react-router-dom";
import {IconChat, IconClose, IconTrident} from "../icons";

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
      isVerticalSwipe: false,
      query: '',
      searched: false
    }

    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.disableScrollY = this.disableScrollY.bind(this)
    this.enableScrollY = this.enableScrollY.bind(this)
    this.setCurrentPage = this.setCurrentPage.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.cancelSearch = this.cancelSearch.bind(this)
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

  }

  handleTouchMove(e) {
    // in the past used to prevent default..
  }

  handleSearch(e) {
    e.preventDefault()
    this.setState({searched: true})
  }

  cancelSearch(e) {
    e.preventDefault()
    this.setState({searched: false, query: ''})
  }

  handleSearchInput(e) {
    this.setState({query: e.target.value});
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

    const searchOpen = this.props.searchOpen
    const searched = this.state.searched

    return <React.Fragment>
        <div className={`rvt-m-tabs ${searchOpen ? 'rvt-m-tabs--search' : ''}`}>

          {!searchOpen &&
            <div className="rvt-m-tabs__tablist" role="tablist" aria-label="Rivet tabs">
              <Link onClick={()=>this.goToPage(0)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 0} to="/">Home</Link>
              <Link onClick={()=>this.goToPage(1)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 1} to="/classes">Classes</Link>
              <Link onClick={()=>this.goToPage(2)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 2} to="/campus">Campus</Link>
              <Link onClick={()=>this.goToPage(3)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 3} to="/help">Help</Link>
              <Link onClick={()=>this.goToPage(4)} className="rvt-m-tabs__tab" role="tab" aria-selected={currentPage === 4} to="/settings">Settings</Link>
            </div>
          }
          {searchOpen &&
            <button
              onClick={() => this.props.toggleSearch()}
              className="rvt-m-search-button"
            >
              <span className="rvt-sr-only">Close search</span>
              { IconClose }
            </button>
          }

          <div ref={(ref) => this.panel = ref} className="rvt-m-tabs__panel" onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove} onTouchEnd={this.handleTouchEnd}>
            {!this.props.searchOpen &&
              <Slider ref={slider => (this.slider = slider)} beforeChange={this.setCurrentPage} {...settings}>
                <Home />
                <Classes />
                <Campus />
                <Help />
                <Settings />
              </Slider>
            }
            {searchOpen &&
              <React.Fragment>
                {!searched &&
                  <div className="rvt-m-top-lg rvt-display-flex">
                    {IconTrident}
                    <form onSubmit={this.handleSearch} style={{width: "80%"}}>
                      <input autoFocus={true} type="text" onChange={this.handleSearchInput} value={this.state.query} className="rvt-m-search-input" aria-describedby="search-help" />
                      <small id="search-help" className="rvt-m-search-help rvt-m-top-sm">{IconChat} Search for tasks, help, and people</small>
                    </form>
                  </div>
                }
                {searched && <React.Fragment>
                  <button className="rvt-button" onClick={this.cancelSearch}>{ IconClose } <span className="rvt-m-left-xs rvt-text-regular">Results for "{this.state.query}"</span></button>
                  <h2 className="rvt-text-bold rvt-m-top-xl">KNOWLEDGE BASE <span className="rvt-ts-12 rvt-text-regular">(2 Results)</span></h2>
                  <ul className="rvt-plain-list">
                    <li>
                      <a href="https://access.iu.edu/passphrase">
                        <h3 className="rvt-text-left rvt-ts-20">Changing your passphrase</h3>
                        <span className="rvt-ts-12">https://access.iu.edu/passphrase</span>
                      </a>
                    </li>
                    <li className="rvt-m-top-sm">
                      <a href="https://access.iu.edu/passphrase">
                        <h3 className="rvt-text-left rvt-ts-20">The human torch could not get a bank loan</h3>
                        <span className="rvt-ts-12">https://access.iu.edu/HumanTorch</span>
                      </a>
                    </li>
                  </ul>

                  <h2 className="rvt-text-bold rvt-m-top-xl">PEOPLE <span className="rvt-ts-12 rvt-text-regular">(1 Result)</span></h2>
                  <ul className="rvt-plain-list">
                    <li>
                      <a href="https://access.iu.edu/timdoe">
                        <h3 className="rvt-text-left rvt-ts-20">Timothy Doe</h3>
                        <span className="rvt-ts-12">Student</span>
                      </a>
                    </li>
                  </ul>
                </React.Fragment>
                }
              </React.Fragment>
            }
          </div>

        </div>
      </React.Fragment>;
  }
}

export default withRouter(Tabs);
