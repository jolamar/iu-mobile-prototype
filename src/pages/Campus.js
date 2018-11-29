import React, { Component } from 'react';

import {Card, Collapsible, SectionLabel} from "../components";

export class Campus extends Component {

  render() {

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">

      <SectionLabel className="rvt-m-top-remove">Getting around</SectionLabel>
      <div className="cards">
        <a href="/bus">
          <Card details={
            <div className="campus">
              <div className="campus__icon rvt-m-right-sm">
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 13.2632C0 14.0968 0.369474 14.8453 0.947368 15.3663V17.0526C0.947368 17.5737 1.37368 18 1.89474 18H2.84211C3.36316 18 3.78947 17.5737 3.78947 17.0526V16.1053H11.3684V17.0526C11.3684 17.5737 11.7947 18 12.3158 18H13.2632C13.7842 18 14.2105 17.5737 14.2105 17.0526V15.3663C14.7884 14.8453 15.1579 14.0968 15.1579 13.2632V3.78947C15.1579 0.473684 11.7663 0 7.57895 0C3.39158 0 0 0.473684 0 3.78947V13.2632ZM3.31579 14.2105C2.52947 14.2105 1.89474 13.5758 1.89474 12.7895C1.89474 12.0032 2.52947 11.3684 3.31579 11.3684C4.10211 11.3684 4.73684 12.0032 4.73684 12.7895C4.73684 13.5758 4.10211 14.2105 3.31579 14.2105ZM11.8421 14.2105C11.0558 14.2105 10.4211 13.5758 10.4211 12.7895C10.4211 12.0032 11.0558 11.3684 11.8421 11.3684C12.6284 11.3684 13.2632 12.0032 13.2632 12.7895C13.2632 13.5758 12.6284 14.2105 11.8421 14.2105ZM13.2632 8.52632H1.89474V3.78947H13.2632V8.52632Z" fill="#006298"/>
                </svg>
              </div>
              <div className="rvt-text-left">
                <div className="campus__title rvt-text-bold">
                  Bus Status
                </div>
                <div className="rvt-ts-12 campus__description">
                  Find your route in real-time
                </div>
              </div>
            </div>
          } />
        </a>
        <Collapsible>
          <Card title="Nearest bus stop" details="IMU">Indiana Memorial Union</Card>
        </Collapsible>
      </div>
      <div className="cards rvt-m-top-sm">
        <a href="/locations">
          <Card details={
            <div className="campus">
              <div className="campus__icon rvt-m-right-sm">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3684 8.52632V2.84211L8.52632 0L5.68421 2.84211V4.73684H0V18H17.0526V8.52632H11.3684ZM3.78947 16.1053H1.89474V14.2105H3.78947V16.1053ZM3.78947 12.3158H1.89474V10.4211H3.78947V12.3158ZM3.78947 8.52632H1.89474V6.63158H3.78947V8.52632ZM9.47368 16.1053H7.57895V14.2105H9.47368V16.1053ZM9.47368 12.3158H7.57895V10.4211H9.47368V12.3158ZM9.47368 8.52632H7.57895V6.63158H9.47368V8.52632ZM9.47368 4.73684H7.57895V2.84211H9.47368V4.73684ZM15.1579 16.1053H13.2632V14.2105H15.1579V16.1053ZM15.1579 12.3158H13.2632V10.4211H15.1579V12.3158Z" fill="#006298"/>
                </svg>
              </div>
              <div className="rvt-text-left">
                <div className="campus__title rvt-text-bold">
                  Buildings
                </div>
                <div className="rvt-ts-12 campus__description">
                  Lookup building codes and directions
                </div>
              </div>
            </div>
          } />
        </a>
        <Collapsible>
          <Card title="Next class location" details="Ballentine Hall">Ballentine Hall</Card>
        </Collapsible>
      </div>

      <div className="cards rvt-m-top-sm">
        <a href="/parking">
          <Card details={
            <div className="campus">
              <div className="campus__icon rvt-m-right-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="16" height="16" rx="4" fill="#006298"/>
                  <path d="M6.70398 13V9.347H8.40698C10.383 9.347 12.164 8.658 12.164 6.331C12.164 4.108 10.539 3.38 8.45898 3.38H5.09198V13H6.70398ZM6.70398 4.862H8.47198C9.91498 4.862 10.565 5.317 10.565 6.383C10.565 7.488 9.91498 7.93 8.48498 7.93H6.70398V4.862Z" fill="white"/>
                </svg>
              </div>
              <div className="rvt-text-left">
                <div className="campus__title rvt-text-bold">
                  Parking
                </div>
                <div className="rvt-ts-12 campus__description">
                  Navigate to nearest lot
                </div>
              </div>
            </div>
          } />
        </a>
        <Collapsible>
          <Card title="Nearest lot" details="Jordan Garage">Jordan Garage</Card>
        </Collapsible>
      </div>

      <SectionLabel className="rvt-m-top-lg">Getting stuff done</SectionLabel>

      <div className="cards">
        <a href="/labs">
          <Card details={
            <div className="campus">
              <div className="campus__icon rvt-m-right-sm">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.22382 3.15544C4.22382 1.41597 5.63979 0 7.37926 0H13.5844C15.3239 0 16.7399 1.41597 16.7399 3.15544V4.09948H17.0539C18.7933 4.09948 20.2093 5.51545 20.2093 7.25492V12.0218C20.2093 13.7612 18.7933 15.1772 17.0539 15.1772H16.7357V18.7244C16.7357 19.6472 15.983 20.4 15.0601 20.4H5.89532C4.97243 20.4 4.21968 19.6472 4.21968 18.7244V15.1772H3.95543C2.21596 15.1772 0.799988 13.7612 0.799988 12.0218V7.25492C0.799988 5.51545 2.21596 4.09948 3.95543 4.09948H4.22382V3.15544ZM7.37926 0.4C5.8607 0.4 4.62382 1.63688 4.62382 3.15544V4.49948H3.95543C2.43687 4.49948 1.19999 5.73636 1.19999 7.25492V12.0218C1.19999 13.5403 2.43687 14.7772 3.95543 14.7772H4.61968V18.7244C4.61968 19.4263 5.19335 20 5.89532 20H15.0601C15.7621 20 16.3357 19.4263 16.3357 18.7244V14.7772H17.0539C18.5724 14.7772 19.8093 13.5403 19.8093 12.0218V7.25492C19.8093 5.73636 18.5724 4.49948 17.0539 4.49948H16.3399V3.15544C16.3399 1.63688 15.103 0.4 13.5844 0.4H7.37926ZM7.37512 1.51917C6.47417 1.51917 5.73885 2.2545 5.73885 3.15544V4.09948H15.2124V3.15544C15.2124 2.2545 14.4771 1.51917 13.5762 1.51917H7.37512ZM5.33885 3.15544C5.33885 2.03358 6.25326 1.11917 7.37512 1.11917H13.5762C14.698 1.11917 15.6124 2.03358 15.6124 3.15544V4.49948H5.33885V3.15544ZM3.95543 5.6228C3.05449 5.6228 2.31916 6.35813 2.31916 7.25907V12.0259C2.31916 12.9268 3.05449 13.6622 3.95543 13.6622H4.22382V12.7523H3.59895C3.17761 12.7523 2.83937 12.4141 2.83937 11.9927C2.83937 11.5714 3.17761 11.2332 3.59895 11.2332H17.2777C17.699 11.2332 18.0373 11.5714 18.0373 11.9927C18.0373 12.4141 17.699 12.7523 17.2777 12.7523H16.7399V13.6622H17.0539C17.9548 13.6622 18.6901 12.9268 18.6901 12.0259V7.25907C18.6901 6.35813 17.9548 5.6228 17.0539 5.6228H3.95543ZM1.91916 7.25907C1.91916 6.13721 2.83357 5.2228 3.95543 5.2228H17.0539C18.1757 5.2228 19.0901 6.13721 19.0901 7.25907V12.0259C19.0901 13.1478 18.1757 14.0622 17.0539 14.0622H16.3399V12.3523H17.2777C17.4781 12.3523 17.6373 12.1932 17.6373 11.9927C17.6373 11.7923 17.4781 11.6332 17.2777 11.6332H3.59895C3.39853 11.6332 3.23937 11.7923 3.23937 11.9927C3.23937 12.1932 3.39853 12.3523 3.59895 12.3523H4.62382V14.0622H3.95543C2.83357 14.0622 1.91916 13.1478 1.91916 12.0259V7.25907ZM5.33885 12.3523H15.6166V18.7326C15.6166 19.0379 15.3654 19.2891 15.0601 19.2891H5.89532C5.59005 19.2891 5.33885 19.0379 5.33885 18.7326V12.3523ZM5.73885 12.7523V18.7326C5.73885 18.817 5.81096 18.8891 5.89532 18.8891H15.0601C15.1445 18.8891 15.2166 18.817 15.2166 18.7326V12.7523H5.73885Z" fill="#006298"/>
                </svg>
              </div>
              <div className="rvt-text-left">
                <div className="campus__title rvt-text-bold">
                  Printers
                </div>
                <div className="rvt-ts-12 campus__description">
                  Find available printers
                </div>
              </div>
            </div>
          } />
        </a>
        <Collapsible>
          <Card title="Nearest open lab" details="Student Building 200">Student Building 200</Card>
        </Collapsible>
      </div>

      <div className="cards rvt-m-top-sm">
        <a href="/labs">
          <Card details={
            <div className="campus">
              <div className="campus__icon rvt-m-right-sm">
                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9642 15.8689L18.722 10.9001C18.7026 10.8226 18.6723 10.7502 18.6338 10.6837C18.7048 10.4867 18.7438 10.2745 18.7438 10.0533V1.86268C18.7438 0.835634 17.9082 0 16.8811 0H3.11822C2.091 0 1.25545 0.835589 1.25545 1.86268V10.0532C1.25545 10.2744 1.29441 10.4867 1.36559 10.6837C1.327 10.7502 1.2965 10.8225 1.27718 10.9L0.0249112 15.9089C-0.0374068 16.1583 0.0186385 16.4226 0.176865 16.6251C0.335047 16.8277 0.577774 16.9462 0.834909 16.9462H19.1644C19.1646 16.9462 19.165 16.9462 19.1651 16.9462C19.6263 16.9462 20 16.5723 20 16.1113C20 16.0271 19.9875 15.9456 19.9642 15.8689ZM12.1153 15.641C12.1151 15.641 12.1149 15.6411 12.1146 15.641H7.88453C7.83571 15.641 7.78935 15.6193 7.75812 15.5819C7.7268 15.5445 7.71367 15.4951 7.72235 15.4469L8.05198 13.6176C8.06612 13.5391 8.13444 13.4821 8.21416 13.4821H11.785C11.8647 13.4821 11.9331 13.5391 11.9471 13.6176L12.274 15.4323C12.2779 15.4463 12.28 15.461 12.28 15.4762C12.2801 15.5673 12.2063 15.641 12.1153 15.641ZM17.1168 10.0533C17.1168 10.1485 17.06 10.2305 16.9786 10.2677H3.02054C2.93909 10.2306 2.88222 10.1485 2.88222 10.0533V1.86268C2.88222 1.73263 2.98809 1.62686 3.11818 1.62686H16.881C17.011 1.62686 17.1168 1.73263 17.1168 1.86268L17.1168 10.0533Z" fill="#006298"/>
                  <path d="M10.4532 5.61312L10.9747 5.47089C11.0779 5.44276 11.1515 5.3513 11.1565 5.24435C11.1617 5.13739 11.0973 5.0393 10.9973 5.00135L8.59288 4.08935C8.50198 4.0549 8.39925 4.07694 8.33048 4.14567C8.26166 4.21444 8.23966 4.31712 8.27411 4.40808L9.18611 6.81253C9.22411 6.91262 9.3222 6.97694 9.42911 6.97175C9.53611 6.96662 9.62752 6.89321 9.65565 6.78994L9.79788 6.26848L11.0145 7.48498C11.111 7.58152 11.2674 7.58152 11.364 7.48498L11.6698 7.17916C11.7663 7.08262 11.7663 6.92616 11.6698 6.82962L10.4532 5.61312Z" fill="#006298"/>
                </svg>
              </div>
              <div className="rvt-text-left">
                <div className="campus__title rvt-text-bold">
                  Labs
                </div>
                <div className="rvt-ts-12 campus__description">
                  Find open rooms and labs
                </div>
              </div>
            </div>
          } />
        </a>
        <Collapsible>
          <Card title="Nearest open lab" details="Swain Hall 007">Swain Hall 007</Card>
        </Collapsible>
      </div>

      <SectionLabel className="rvt-m-top-lg">Things to do</SectionLabel>

      <div className="cards">
        <a href="/food">
          <Card details={
            <div className="campus">
              <div className="campus__icon rvt-m-right-sm">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.36 10.1186L8.19 7.31304L1.17 0.363525C-0.39 1.91007 -0.39 4.41824 1.17 5.97469L5.36 10.1186ZM12.14 8.32421C13.67 9.02808 15.82 8.5324 17.41 6.95612C19.32 5.0626 19.69 2.34624 18.22 0.88892C16.76 -0.558483 14.02 -0.201589 12.1 1.69193C10.51 3.26821 10.01 5.39966 10.72 6.91646L0.959961 16.5923L2.36996 17.9901L9.25996 11.1794L16.14 18L17.55 16.6022L10.67 9.78153L12.14 8.32421Z" fill="#006298"/>
                </svg>
              </div>
              <div className="rvt-text-left">
                <div className="campus__title rvt-text-bold">
                  Find food
                </div>
                <div className="rvt-ts-12 campus__description">
                  Find a place to eat
                </div>
              </div>
            </div>
          } />
        </a>
        <Collapsible>
          <Card title="Nearest eatery" details="Wilkie">Wilkie</Card>
        </Collapsible>
      </div>
      <div className="cards rvt-m-top-sm">
        <a href="/events">
          <Card details={
            <div className="campus">
              <div className="campus__icon rvt-m-right-sm">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.36 10.1186L8.19 7.31304L1.17 0.363525C-0.39 1.91007 -0.39 4.41824 1.17 5.97469L5.36 10.1186ZM12.14 8.32421C13.67 9.02808 15.82 8.5324 17.41 6.95612C19.32 5.0626 19.69 2.34624 18.22 0.88892C16.76 -0.558483 14.02 -0.201589 12.1 1.69193C10.51 3.26821 10.01 5.39966 10.72 6.91646L0.959961 16.5923L2.36996 17.9901L9.25996 11.1794L16.14 18L17.55 16.6022L10.67 9.78153L12.14 8.32421Z" fill="#006298"/>
                </svg>
              </div>
              <div className="rvt-text-left">
                <div className="campus__title rvt-text-bold">
                  Events
                </div>
                <div className="rvt-ts-12 campus__description">
                  Upcoming gatherings and events
                </div>
              </div>
            </div>
          } />
        </a>
        <Collapsible>
          <Card title="Happening tonight" details="Football @ 7:00 PM">Football @ 7:00 PM</Card>
        </Collapsible>
      </div>
    </div>;
  }
}
