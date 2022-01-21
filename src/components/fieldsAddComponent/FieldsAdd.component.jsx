import React, { useState } from 'react';
import './fieldsAdd.styles.css';
import Label from '../labelComponent/Label.component';
import BreakLine from '../breakLineComponent/BreakLine.component';
import Button from '../FlexibleButtonComponent/FlexibleButton.component';
import { DeleteItemIcon } from '../iconsComponent/Icons.component';
import Dropdown from '../dropdownComponent/SpecialDropdown.component';
import CheckBox from '../checkboxComponent/CheckBox.component';
function FieldsAdd(props) {
  const [addedField, setAddedField] = useState(true);
  const [value, setValue] = useState();

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnPressAdd = () => {
    setAddedField(!addedField);
  };

  return (
    <div className='container1-fieldsAdd'>
      {addedField ? (
        <>
          <div className='parentLabel-fieldsAdd'>
            <div className='div1-label-fieldsAdd'>
              <Label label='FieldName' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
            <div className='div2-label-fieldsAdd'>
              <Label label='IsRequired ' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
            <div className='div3-label-fieldsAdd'>
              <Label label='Remove ' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
            <div className='div4-label-fieldsAdd'>
              <Label label='Type ' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
          </div>
          <div className='parentButton-fieldsAdd'>
            <div className='div1-Button-fieldsAdd'>
              <div className='button-wrapper-fieldsAdd'>
                <Button
                  onClick={handleOnPressAdd}
                  className='button-fieldsAdd'
                  name='Add Field'
                  variant='contained'
                  sx={
                    props.sx
                      ? props.sx
                      : {
                          backgroundColor: '#11468F',
                          borderRadius: '20px',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#11468F50',
                            borderRadius: '20px',
                          },
                        }
                  }
                />
              </div>
            </div>
            <div className='div2-Button-fieldsAdd'>
              <div className='button-wrapper-fieldsAdd'>
                <Button
                  onClick={handleOnPressAdd}
                  className='button-fieldsAdd'
                  name='Add Custom Field'
                  variant='contained'
                  sx={
                    props.sx
                      ? props.sx
                      : {
                          backgroundColor: '#11468F',
                          borderRadius: '20px',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#11468F50',
                            borderRadius: '20px',
                          },
                        }
                  }
                />
              </div>
            </div>
            <div className='div3-Button-fieldsAdd'></div>
            <div className='div4-Button-fieldsAdd'> </div>
          </div>
        </>
      ) : (
        <>
          <div className='parentLabel-fieldsAdd'>
            <div className='div1-label-fieldsAdd'>
              <Label label='FieldName' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
            <div className='div2-label-fieldsAdd'>
              <Label label='IsRequired ' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
            <div className='div3-label-fieldsAdd'>
              <Label label='Remove ' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
            <div className='div4-label-fieldsAdd'>
              <Label label='Type ' className='label-fieldsAdd' />
              <BreakLine className='breakLine-fieldsAdd' />
            </div>
          </div>
          <div className='parentButton-fieldsAdd'>
            <div className='div1-Button-fieldsAdd'>
              <Dropdown
                items={props.items}
                label={props.label}
                handleChange={handleChange}
                value={props.value}
                inputLabel={props.value ? props.value : 'Server - MT4'}
              />
            </div>
            <div className='div2-Button-fieldsAdd'>
              <CheckBox className='checkBox-fieldsAdd' />
            </div>
            <div className='div3-Button-fieldsAdd'>
              <DeleteItemIcon className='deleteItemIcon-fieldsAdd' />
            </div>
            <div className='div4-Button-fieldsAdd'>
              <div className='deleteItemIcon-wrapper-fieldsAdd'>
                <div className='basic-wrapper-fieldsAdd'>
                  <Label label='Basic' className='label-fieldsAdd' />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FieldsAdd;
