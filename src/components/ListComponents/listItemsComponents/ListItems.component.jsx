import React from 'react';

function ListItems(props) {
  return (
    <>
      {props.list.map((item) => {
        return <li key={item.id}>{item.value}</li>;
      })}
    </>
  );
}

export default ListItems;
