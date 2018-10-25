import React from 'react'

export const Card = ({banner, bannerAlt, title, subtitle, details, subdetails, links}) => (
  <div className="rvt-panel rvt-panel--light card">
    { banner && <div className="rvt-text-bold card__banner"><img alt={ bannerAlt || title } src={ banner } /></div> }

    { title && <div className="rvt-text-bold card__title">{ title }</div> }

    { subtitle && <div className="rvt-text-bold card__title">{ subtitle }</div> }

    { details && <div className="card__detail">{ details }</div> }

    { subdetails && <div className="card__detail">{ subdetails }</div> }

    { !!links && links.length &&
      <div className="card__links rvt-m-top-sm">
        { links.map( link =>
          <a key={link.title + link.url} href={link.url} className="rvt-ts-14 rvt-m-right-sm card__link">{ link.title }</a>
        )}
      </div>
    }
  </div>
)

