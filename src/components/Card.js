import React from 'react'

export const Card = ({title, subtitle, details, subdetails, links}) => (
  <div className="rvt-panel rvt-panel--light card">
    <div className="rvt-text-bold card__title">{ title }</div>
    <div className="rvt-text-bold card__title">{ subtitle }</div>
    <div className="card__detail">{ details }</div>
    <div className="rvt-m-bottom-md card__detail">{ subdetails }</div>

    { !!links && links.length && links.map( link =>
      <a href={link.url} className="rvt-ts-14 rvt-m-right-md card__link">{ link.title }</a>
    )}
  </div>
)

