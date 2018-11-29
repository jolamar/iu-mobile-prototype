import React from 'react';

export const SectionLabel = props => <p className={`section-label rvt-m-left-xs rvt-m-bottom-xs${props.className ? ' ' + props.className : ''}`}>{props.children}</p>

