import React from 'react';

function Label(props) {
  return (
    <div
      onClick={props.onClick}
      className={props.className}
      style={{ fontSize: props.size }}
    >
      {props.icon} {props.label}
      {props.children}
    </div>
  );
}

export default Label;
