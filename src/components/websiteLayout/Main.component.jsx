import React from 'react';
import LeftSide from './LeftSide.component';
import RightSide from './RightSide.component';

function Main(props) {
  return (
    <>
      <LeftSide menuTitle={props.menuTitle}>{props.leftSideChildren}</LeftSide>
      <RightSide pageTitle={props.pageTitle}>
        {props.rightSideChildren}
      </RightSide>
    </>
  );
}

export default Main;
