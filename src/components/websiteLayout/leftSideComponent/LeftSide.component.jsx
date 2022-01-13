import React from 'react';

//The Menu / Sidebar

function LeftSide(props) {
  return (
    <div
      className='w3-sidebar w3-light-grey w3-bar-block'
      style={{ width: '25%' }}
    >
      <h3 className='w3-bar-item'>{props.menuTitle}</h3>
      {props.children}
    </div>
  );
}

export default LeftSide;
