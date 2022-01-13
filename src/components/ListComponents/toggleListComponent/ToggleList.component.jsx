import React, { useState } from 'react';
import Toggle from '../../toggleComponent/Toggle.component';
import Label from '../../labelComponent/Label.component';
function ToggleList(props) {
  const [list, setList] = useState();

  return (
    <>
      {props.list.map((list1) => {
        return (
          <div style={{ margin: '10px' }} key={list1.id}>
            <Label label={list1.label} />
            <Toggle  />
          </div>
        );
      })}
    </>
  );
}

export default ToggleList;
