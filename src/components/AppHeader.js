import React, { Component } from 'react';
import {IconMagnifyingGlass} from "../icons";
export class AppHeader extends Component {
  render() {
    const props = this.props
    return <React.Fragment>
      <div className={`rvt-m-header${props.home ? ' rvt-m-header__home' : ''}`}>
      {props.home && <a className="rvt-m-header__settings" href="/settings">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.4644 12.8508L27.3587 12.4936C27.1394 11.7855 26.8574 11.1024 26.5127 10.4506L27.7535 8.71464C28.28 7.97514 28.1985 6.96616 27.553 6.32693L25.6855 4.45937C25.3345 4.10842 24.8708 3.91414 24.3757 3.91414C23.9871 3.91414 23.6174 4.03322 23.304 4.25883L21.5618 5.49969C20.885 5.14247 20.1768 4.84792 19.4436 4.62858L19.0926 2.54794C18.9422 1.65177 18.1714 1 17.2627 1H14.6243C13.7156 1 12.9448 1.65177 12.7944 2.54794L12.4309 4.67871C11.729 4.89806 11.0459 5.18634 10.3941 5.53729L8.67073 4.29643C8.35738 4.07082 7.98137 3.95174 7.59282 3.95174C7.09773 3.95174 6.62771 4.14602 6.28303 4.49697L4.40921 6.36453C3.76999 7.00376 3.68225 8.01274 4.20867 8.75225L5.46206 10.5133C5.11738 11.1713 4.84163 11.8544 4.62856 12.5626L2.54793 12.9135C1.65176 13.0639 1 13.8348 1 14.7435V17.3819C1 18.2906 1.65176 19.0614 2.54793 19.2118L4.67869 19.5753C4.89803 20.2772 5.18631 20.9603 5.53726 21.6121L4.30268 23.3292C3.77625 24.0687 3.85772 25.0777 4.50322 25.7169L6.37076 27.5845C6.72171 27.9354 7.18547 28.1297 7.68055 28.1297C8.0691 28.1297 8.43885 28.0107 8.7522 27.785L10.5132 26.5316C11.1462 26.8638 11.8105 27.1333 12.4936 27.3464L12.8445 29.4521C12.9949 30.3482 13.7657 31 14.6745 31H17.3191C18.2278 31 18.9986 30.3482 19.149 29.4521L19.5063 27.3464C20.2144 27.127 20.8975 26.845 21.5493 26.5003L23.2852 27.7412C23.5986 27.9668 23.9746 28.0859 24.3631 28.0859C24.8582 28.0859 25.322 27.8916 25.6729 27.5406L27.5405 25.6731C28.1797 25.0338 28.2674 24.0249 27.741 23.2854L26.5002 21.5431C26.8448 20.8851 27.1331 20.202 27.3462 19.5001L29.4519 19.1492C30.3481 18.9987 30.9998 18.2279 30.9998 17.3192V14.6808C31.0124 13.7721 30.3606 13.0013 29.4644 12.8508ZM29.3203 17.3192C29.3203 17.4007 29.2639 17.4696 29.1824 17.4821L26.5503 17.9208C26.2182 17.9772 25.9549 18.2216 25.8735 18.5413C25.6353 19.4625 25.2718 20.3461 24.783 21.1671C24.6138 21.4554 24.6263 21.8126 24.8206 22.0884L26.3686 24.2693C26.4124 24.3319 26.4062 24.4259 26.3498 24.4823L24.4822 26.3499C24.4383 26.3938 24.3945 26.4 24.3631 26.4C24.3255 26.4 24.2942 26.3875 24.2691 26.3687L22.0945 24.8208C21.825 24.6265 21.4615 24.614 21.1733 24.7832C20.3523 25.272 19.4687 25.6355 18.5474 25.8736C18.2215 25.9551 17.9771 26.2246 17.927 26.5504L17.482 29.1826C17.4695 29.264 17.4006 29.3205 17.3191 29.3205H14.6807C14.5993 29.3205 14.5303 29.264 14.5178 29.1826L14.0791 26.5504C14.0227 26.2183 13.7783 25.9551 13.4587 25.8736C12.5625 25.6417 11.6977 25.2845 10.8892 24.8208C10.7576 24.7456 10.6072 24.708 10.4631 24.708C10.2939 24.708 10.1184 24.7581 9.97425 24.8646L7.78082 26.4251C7.74949 26.4439 7.71815 26.4564 7.68682 26.4564C7.66175 26.4564 7.61162 26.4502 7.56775 26.4063L5.7002 24.5388C5.6438 24.4823 5.63753 24.3946 5.6814 24.3257L7.22307 22.1636C7.41734 21.8878 7.42988 21.5243 7.26067 21.2361C6.77185 20.4213 6.39583 19.5377 6.15769 18.6165C6.06995 18.2968 5.80674 18.0524 5.48086 17.996L2.82995 17.5448C2.74848 17.5323 2.69207 17.4633 2.69207 17.3819V14.7435C2.69207 14.662 2.74848 14.5931 2.82995 14.5805L5.44326 14.1418C5.77541 14.0854 6.04488 13.841 6.12635 13.5151C6.35823 12.5939 6.71545 11.704 7.198 10.883C7.36721 10.5947 7.34841 10.2375 7.15413 9.96804L5.59366 7.7746C5.5498 7.71193 5.55606 7.61792 5.61246 7.56152L7.48001 5.69396C7.52388 5.65009 7.56775 5.64383 7.59908 5.64383C7.63669 5.64383 7.66802 5.65636 7.69309 5.67516L9.85518 7.21684C10.1309 7.41111 10.4944 7.42365 10.7827 7.25444C11.5974 6.76562 12.481 6.3896 13.4023 6.15145C13.7219 6.06371 13.9663 5.8005 14.0227 5.47462L14.4739 2.82369C14.4864 2.74222 14.5554 2.68582 14.6369 2.68582H17.2752C17.3567 2.68582 17.4256 2.74222 17.4382 2.82369L17.8769 5.43702C17.9333 5.76917 18.1777 6.03865 18.5036 6.12012C19.4499 6.35826 20.3523 6.72801 21.1921 7.2231C21.4803 7.39231 21.8376 7.37978 22.1133 7.1855L24.2754 5.63129C24.3067 5.61249 24.3381 5.59996 24.3694 5.59996C24.3945 5.59996 24.4446 5.60623 24.4885 5.65009L26.356 7.51765C26.4124 7.57405 26.4187 7.66179 26.3748 7.73073L24.8269 9.90537C24.6326 10.1748 24.6201 10.5383 24.7893 10.8266C25.2781 11.6476 25.6416 12.5312 25.8797 13.4525C25.9612 13.7784 26.2307 14.0228 26.5566 14.0729L29.1887 14.5179C29.2701 14.5304 29.3265 14.5993 29.3265 14.6808V17.3192H29.3203Z" fill="#666666" stroke="#666666" strokeWidth="0.25"/>
          <path d="M16.003 9.52301C12.4309 9.52301 9.5293 12.4246 9.5293 15.9968C9.5293 19.569 12.4309 22.4706 16.003 22.4706C19.5752 22.4706 22.4768 19.569 22.4768 15.9968C22.4768 12.4246 19.5752 9.52301 16.003 9.52301ZM16.003 20.7785C13.3647 20.7785 11.2214 18.6352 11.2214 15.9968C11.2214 13.3584 13.3647 11.2151 16.003 11.2151C18.6414 11.2151 20.7847 13.3584 20.7847 15.9968C20.7847 18.6352 18.6414 20.7785 16.003 20.7785Z" fill="#666666" stroke="#666666" strokeWidth="0.25"/>
        </svg>
      </a>
      }
      <div className="rvt-m-header__title">
          <svg width="47" height="60" viewBox="0 0 47 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.3203 7.92001V12.4534H34.6793V37.3467H27.9743V4.53335H31.3203V0H15.6799V4.53335H19.0127V37.3467H12.3209V12.4534H15.6799V7.92001H0V12.4534H3.35904V41.72L8.6993 47.5334H19.0127V54.3467H15.6799V60H31.3203V54.3467H27.9743V47.5334H37.8415L43.6149 41.72V12.4534H47V7.92001H31.3203Z" fill="#990000"/>
          </svg>
        </div>
        {props.children}
      </div>
      {!props.searchOpen && props.searchBar && <div className="rvt-p-lr-lg rvt-p-bottom-lg rvt-background--white rvt-m-header__search">
        <div className="rvt-input-group">
          <input placeholder="Search for tasks, help, and people" className="rvt-ts-12 rvt-p-left-sm rvt-input-group__input" type="text" id="search" />
          <div className="rvt-input-group__append">
            <button className="rvt-button">{IconMagnifyingGlass}</button>
          </div>
        </div>
      </div>
      }
    </React.Fragment>
  }
}

