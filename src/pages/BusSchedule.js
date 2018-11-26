import React, { Component } from 'react';

import { IconBus } from "../icons";

import axios from 'axios'

export class BusSchedule extends Component {

  render() {
    const route = this.props.match.params.route

    const weekSchedule = {
      A: <ul className="rvt-plain-list">
        <li className="rvt-text-bold">Leaving Stadium</li>
        <li className="rvt-text-bold">MORNING SCHEDULE</li>
          <li>7:25 AM</li>
          <li>7:31 AM</li>
          <li>7:37 AM</li>
          <li>7:44 AM</li>
          <li>7:54 AM</li>
          <li>8:04 AM</li>
          <li>8:14 AM</li>
          <li>8:20 AM</li>
          <li>8:30 AM</li>
          <li>8:40 AM</li>
          <li>8:46 AM</li>
          <li>8:56 AM</li>
          <li>9:06 AM</li>
          <li>9:11 AM</li>
          <li>9:20 AM</li>
          <li>9:25 AM</li>
          <li>9:30 AM</li>
          <li>9:35 AM</li>
          <li>9:40 AM</li>
          <li>9:50 AM</li>
          <li>9:57 AM</li>
          <li>10:03 AM</li>
          <li>10:10 AM</li>
          <li>10:15 AM</li>
          <li>10:22 AM</li>
          <li>10:30 AM</li>
          <li>10:36 AM</li>
          <li>10:41 AM</li>
          <li>10:51 AM</li>
          <li>10:56 AM</li>
          <li>11:02 AM</li>
          <li>11:12 AM</li>
          <li>11:22 AM</li>
          <li>11:31 AM</li>
          <li>11:40 AM</li>
          <li>11:44 AM</li>
          <li>11:50 AM</li>
          <li>11:53 AM</li>
        <li className="rvt-text-bold">AFTERNOON SCHEDULE</li>
          <li>12:01 PM</li>
          <li>12:10 PM</li>
          <li>12:17 PM</li>
          <li>12:25 PM</li>
          <li>12:30 PM</li>
          <li>12:34 PM</li>
          <li>12:43 PM</li>
          <li>12:52 PM</li>
          <li>1:00 PM</li>
          <li>1:09 PM</li>
          <li>1:15 PM</li>
          <li>1:20 PM</li>
          <li>1:26 PM</li>
          <li>1:34 PM</li>
          <li>1:41 PM</li>
          <li>1:51 PM</li>
          <li>1:59 PM</li>
          <li>2:06 PM</li>
          <li>2:11 PM</li>
          <li>2:21 PM</li>
          <li>2:30 PM</li>
          <li>2:39 PM</li>
          <li>2:52 PM</li>
          <li>3:06 PM</li>
          <li>3:15 PM</li>
          <li>3:20 PM</li>
          <li>3:24 PM</li>
          <li>3:29 PM</li>
          <li>3:45 PM</li>
          <li>3:54 PM</li>
          <li>4:03 PM</li>
          <li>4:11 PM</li>
          <li>4:17 PM</li>
          <li>4:25 PM</li>
          <li>4:30 PM</li>
          <li>4:38 PM</li>
          <li>4:46 PM</li>
          <li>4:54 PM</li>
          <li>5:03 PM</li>
          <li>5:11 PM</li>
          <li>5:19 PM</li>
          <li>5:28 PM</li>
          <li>5:36 PM</li>
          <li>5:44 PM</li>
          <li>5:53 PM</li>
          <li>6:01 PM</li>
          <li>6:11 PM</li>
          <li>6:20 PM</li>
          <li>6:29 PM</li>
          <li>6:38 PM</li>
          <li>6:47 PM</li>
          <li>7:00 PM</li>
          <li>7:15 PM</li>
          <li>7:30 PM</li>
          <li>7:40 PM</li>
          <li>7:50 PM</li>
          <li>8:00 PM</li>
          <li>8:15 PM</li>
          <li>8:35 PM</li>
          <li>8:45 PM</li>
          <li>9:00 PM</li>
          <li>9:30 PM</li>
          <li>9:45 PM</li>
          <li>10:15 PM</li>
          <li>10:30 PM</li>
          <li>11:15 PM</li>
          <li>12:00 AM</li>
      </ul>,
      B: <ul className="rvt-plain-list">
        <li className="rvt-text-bold">Leaving Fisher Court</li>
        <li className="rvt-text-bold">MORNING SCHEDULE</li>
        <li>7:30 AM</li>
        <li>7:40 AM</li>
        <li>8:00 AM</li>
        <li>8:15 AM</li>
        <li>8:33 AM</li>
        <li>8:44 AM</li>
        <li>8:48 AM</li>
        <li>8:55 AM</li>
        <li>9:06 AM</li>
        <li>9:15 AM</li>
        <li>9:22 AM</li>
        <li>9:33 AM</li>
        <li>9:45 AM</li>
        <li>9:51 AM</li>
        <li>9:58 AM</li>
        <li>10:09 AM</li>
        <li>10:20 AM</li>
        <li>10:30 AM</li>
        <li>10:41 AM</li>
        <li>10:49 AM</li>
        <li>11:00 AM</li>
        <li>11:09 AM</li>
        <li>11:20 AM</li>
        <li>11:32 AM</li>
        <li>11:44 AM</li>
        <li>11:56 AM</li>
        <li className="rvt-text-bold">AFTERNOON SCHEDULE</li>
        <li>12:05 PM</li>
        <li>12:15 PM</li>
        <li>12:26 PM</li>
        <li>12:37 PM</li>
        <li>12:46 PM</li>
        <li>12:56 PM</li>
        <li>1:06 PM</li>
        <li>1:16 PM</li>
        <li>1:26 PM</li>
        <li>1:38 PM</li>
        <li>1:51 PM</li>
        <li>2:02 PM</li>
        <li>2:12 PM</li>
        <li>2:22 PM</li>
        <li>2:34 PM</li>
        <li>2:44 PM</li>
        <li>2:55 PM</li>
        <li>3:06 PM</li>
        <li>3:17 PM</li>
        <li>3:28 PM</li>
        <li>3:39 PM</li>
        <li>3:50 PM</li>
        <li>4:01 PM</li>
        <li>4:13 PM</li>
        <li>4:25 PM</li>
        <li>4:33 PM</li>
        <li>4:44 PM</li>
        <li>5:04 PM</li>
        <li>5:15 PM</li>
        <li>5:23 PM</li>
        <li>5:38 PM</li>
        <li>5:45 PM</li>
        <li>5:58 PM</li>
        <li>6:23 PM</li>
        <li>6:36 PM</li>
        <li>7:04 PM</li>
        <li>7:20 PM</li>
        <li>7:40 PM</li>
        <li>8:05 PM</li>
        <li>8:15 PM</li>
        <li>8:45 PM</li>
        <li>9:15 PM</li>
        <li>9:50 PM</li>
        <li>10:20 PM</li>
        <li>10:55 PM</li>
        <li>11:25 PM</li>
        <li>12:00 AM</li>
      </ul>,
      E: <ul className="rvt-plain-list">
        <li className="rvt-text-bold">Leaving Evermann</li>
        <li className="rvt-text-bold">MORNING SCHEDULE</li>
        <li>7:25 AM</li>
        <li>7:45 AM</li>
        <li>8:00 AM</li>
        <li>8:25 AM</li>
        <li>8:35 AM</li>
        <li>8:45 AM</li>
        <li>9:05 AM</li>
        <li>9:15 AM</li>
        <li>9:25 AM</li>
        <li>9:45 AM</li>
        <li>9:55 AM</li>
        <li>10:05 AM</li>
        <li>10:25 AM</li>
        <li>10:35 AM</li>
        <li>10:45 AM</li>
        <li>11:05 AM</li>
        <li>11:15 AM</li>
        <li>11:25 AM</li>
        <li>11:45 AM</li>
        <li>11:55 AM</li>
        <li className="rvt-text-bold">AFTERNOON SCHEDULE</li>
        <li>12:05 PM</li>
        <li>12:25 PM</li>
        <li>12:35 PM</li>
        <li>12:45 PM</li>
        <li>1:05 PM</li>
        <li>1:15 PM</li>
        <li>1:25 PM</li>
        <li>1:45 PM</li>
        <li>1:55 PM</li>
        <li>2:05 PM</li>
        <li>2:25 PM</li>
        <li>2:35 PM</li>
        <li>2:45 PM</li>
        <li>3:05 PM</li>
        <li>3:15 PM</li>
        <li>3:25 PM</li>
        <li>3:45 PM</li>
        <li>3:55 PM</li>
        <li>4:05 PM</li>
        <li>4:20 PM</li>
        <li>4:40 PM</li>
        <li>5:00 PM</li>
        <li>5:20 PM</li>
        <li>5:40 PM</li>
        <li>6:00 PM</li>
        <li>6:20 PM</li>
        <li>6:40 PM</li>
        <li>7:05 PM</li>
        <li>7:20 PM</li>
        <li>7:40 PM</li>
        <li>8:00 PM</li>
        <li>8:15 PM</li>
        <li>8:50 PM</li>
        <li>9:25 PM</li>
        <li>10:00 PM</li>
        <li>10:35 PM</li>
        <li>11:10 PM</li>
        <li>11:45 PM</li>
      </ul>,
      W: <ul className="rvt-plain-list">
        <li className="rvt-text-bold">Leaving Stadium</li>
        <li className="rvt-text-bold">MORNING SCHEDULE</li>
          <li>7:25 AM</li>
          <li>7:35 AM</li>
          <li>7:50 AM</li>
          <li>8:00 AM</li>
          <li>8:15 AM</li>
          <li>8:25 AM</li>
          <li>8:38 AM</li>
          <li>8:47 AM</li>
          <li>8:56 AM</li>
          <li>9:05 AM</li>
          <li>9:10 AM</li>
          <li>9:14 AM</li>
          <li>9:23 AM</li>
          <li>9:32 AM</li>
          <li>9:41 AM</li>
          <li>9:50 AM</li>
          <li>9:59 AM</li>
          <li>10:08 AM</li>
          <li>10:17 AM</li>
          <li>10:26 AM</li>
          <li>10:35 AM</li>
          <li>10:44 AM</li>
          <li>10:53 AM</li>
          <li>11:02 AM</li>
          <li>11:11 AM</li>
          <li>11:20 AM</li>
          <li>11:29 AM</li>
          <li>11:38 AM</li>
          <li>11:47 AM</li>
          <li>11:56 AM</li>
        <li className="rvt-text-bold">AFTERNOON SCHEDULE</li>
          <li>12:05 PM</li>
          <li>12:33 PM</li>
          <li>12:42 PM</li>
          <li>12:51 PM</li>
          <li>1:00 PM</li>
          <li>1:09 PM</li>
          <li>1:18 PM</li>
          <li>1:27 PM</li>
          <li>1:36 PM</li>
          <li>1:45 PM</li>
          <li>1:54 PM</li>
          <li>2:03 PM</li>
          <li>2:09 PM</li>
          <li>2:16 PM</li>
          <li>2:25 PM</li>
          <li>2:32 PM</li>
          <li>2:42 PM</li>
          <li>3:02 PM</li>
          <li>3:11 PM</li>
          <li>3:20 PM</li>
          <li>3:29 PM</li>
          <li>3:38 PM</li>
          <li>3:47 PM</li>
          <li>3:56 PM</li>
          <li>4:05 PM</li>
          <li>4:14 PM</li>
          <li>4:23 PM</li>
          <li>4:32 PM</li>
          <li>4:41 PM</li>
          <li>4:50 PM</li>
          <li>4:59 PM</li>
          <li>5:12 PM</li>
          <li>5:29 PM</li>
          <li>5:41 PM</li>
          <li>5:56 PM</li>
          <li>6:09 PM</li>
          <li>6:15 PM</li>
          <li>6:30 PM</li>
          <li>6:40 PM</li>
          <li>6:55 PM</li>
          <li>7:10 PM</li>
          <li>7:35 PM</li>
          <li>8:10 PM</li>
          <li>8:40 PM</li>
          <li>9:05 PM</li>
          <li>9:40 PM</li>
          <li>10:05 PM</li>
      </ul>,
      WL: <ul className="rvt-plain-list">
        <li className="rvt-text-bold">Leaving Stadium</li>
        <li className="rvt-text-bold">MORNING SCHEDULE</li>
          <li>7:20 AM</li>
          <li>7:30 AM</li>
          <li>7:40 AM</li>
          <li>8:10 AM</li>
          <li>8:30 AM</li>
          <li>8:45 AM</li>
          <li>9:00 AM</li>
          <li>9:12 AM</li>
          <li>9:50 AM</li>
          <li>10:22 AM</li>
          <li>10:35 AM</li>
          <li>10:50 AM</li>
      </ul>
    }

    return <div className="rvt-m-tabs__panel rvt-p-bottom-xxl" tabIndex="0" role="tabpanel" id="tab-3" aria-labelledby="t-three">
      {weekSchedule[route]}
    </div>;
  }
}