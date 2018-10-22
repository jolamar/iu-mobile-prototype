import React from 'react';

export const Avatar = props => {
  return (
    <div className="rvt-m-avatar rvt-m-avatar--decorated rvt-m-left-auto">
      <img src={props.url} alt={props.alt} />
    </div>
  )
}

