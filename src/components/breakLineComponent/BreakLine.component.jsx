import React from 'react';
import './breakLine.styles.css';
function BreakLine(props) {
  return <div className={`line ${props.className}`}></div>;
}

export default BreakLine;
