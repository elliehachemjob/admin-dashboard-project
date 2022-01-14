import React from 'react';
import Checkbox from '@mui/material/Checkbox';

function CheckBox() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return <Checkbox {...label} />;
}

export default CheckBox;
