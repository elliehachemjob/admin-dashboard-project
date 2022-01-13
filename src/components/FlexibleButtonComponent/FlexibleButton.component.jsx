import React from 'react';
import Button from '@mui/material/Button';

function FlexibleButton(props) {
  return <Button variant='outlined'>{props.name}</Button>;
}

export default FlexibleButton;
