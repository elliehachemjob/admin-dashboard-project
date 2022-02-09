import React from 'react';

function Label(props) {
  return (
    <div
      onClick={props.onClick}
      dblclick={props.dblclick}
      className={props.className}
      style={{
        size: props.size,
        fontWeight: props.fontWeight,
        marginRight: props.margin,
        textTransform: props.textTransform,
        marginLeft: props.marginLeft,
      }}
    >
      {props.icon} {props.label}
      {props.children}
    </div>
  );
}

export default Label;
