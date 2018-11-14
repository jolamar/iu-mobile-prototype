import React from 'react'

import { IconWifi } from "../icons";

export const Card = ({banner, bannerAlt, title, subtitle, details, subdetails, links, children, className}) => (
  <div className={`rvt-panel rvt-panel--light card ${className || ''}`}>
    { banner && <div className="rvt-text-bold card__banner"><img alt={ bannerAlt || title } src={ banner } /></div> }

    { title && <div className="rvt-text-bold card__title">{ title }</div> }

    { subtitle && <div className="rvt-text-bold card__title">{ subtitle }</div> }

    { details && <div className={"card__detail"}>{ details }</div> }

    { subdetails && <div className="card__detail">{ subdetails }</div> }

    { !!links && links.length &&
      <div className="card__links rvt-m-top-sm">
        { links.map( link =>
          <React.Fragment key={link.title + link.url}>
            { link.title === 'Live View' && IconWifi }
            <a href={link.url} className="rvt-text-bold rvt-ts-14 rvt-m-right-sm card__link">{ link.title }</a>
          </React.Fragment>
        )}
      </div>
    }

    { children }
  </div>
)

