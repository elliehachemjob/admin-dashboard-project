import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import AddFields from '../../../../components/fieldsAddComponent/FieldsAdd.component';

import './conditions.mini.styles.css';
function Conditions() {
  const [value, setValue] = useState();
  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  return (
    <>
      <Label label='Conditions' className='main-header-applicationFlow' />
      <Label
        label='Set Custom Conditions'
        className='main-header-applicationFlow'
      />
      <AddFields
        sx={{
          backgroundColor: '#04724D',
          borderRadius: '10px',
          fontWeight: 600,

          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
        sx2={{
          backgroundColor: '#04724D',
          borderRadius: '10px',
          fontWeight: 600,
          marginTop: 2.5,
          '&:hover': {
            backgroundColor: '#5E807F',
            borderRadius: '10px',
          },
        }}
        items={menu}
        label={value}
        value={value}
      />
    </>
  );
}

export default Conditions;
