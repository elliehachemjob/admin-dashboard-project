import React from 'react';

//Right side where we list all content

function RightSide(props) {
  return (
    <div style={{ marginLeft: '25%' }}>
      <div className='w3-container w3-teal'>
        <h1>{props.pageTitle}</h1>
      </div>
      <img style={{ width: '100 %' }} />
      <div className='w3-container'>{props.children}</div>
    </div>
  );
}

export default RightSide;
