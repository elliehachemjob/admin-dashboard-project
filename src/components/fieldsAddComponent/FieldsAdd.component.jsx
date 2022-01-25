import React, { useState } from 'react';
import './fieldsAdd.styles.css';
import Label from '../labelComponent/Label.component';
import BreakLine from '../breakLineComponent/BreakLine.component';
import Button from '../FlexibleButtonComponent/FlexibleButton.component';
import { DeleteItemIcon, AddItemIcon } from '../iconsComponent/Icons.component';
import Dropdown from '../dropdownComponent/SpecialDropdown.component';
import CheckBox from '../checkboxComponent/CheckBox.component';
import SearchInput from '../searchInputComponent/SearchInput.component';
import ListFieldsAddComponent from '../../components/ListComponents/ListFieldsAddComponent/ListFieldsAddComponent.component';

function FieldsAdd(props) {
  const [addedField, setAddedField] = useState(true);
  const [value, setValue] = useState();
  const [fields, setFields] = useState([]);

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnPressAdd = () => {
    const date = new Date();
    const newId = date.toString();

    setFields([...fields, { id: newId, name: 'hi' }]);
    console.log('fields', [...fields, { id: 6, name: 'hi' }]);
  };

  const [abuseValidation, setAbuseValidation] = useState([
    { label: 'Add Fields' },
    { label: 'Email' },
    { label: 'State' },
  ]);

  const handleAddField = () => {
    const array = [...abuseValidation];
  };

  return (
    <div className='new-main-fieldsAdd container1-fieldsAdd'>
      <div className='div1-main-fieldsAdd'>
        <div className='parentButton-fieldsAdd'>
          <div className='div1-Button-fieldsAdd'>
            <Label
              label={props.field1 ? props.field1 : 'FieldName'}
              className='label-fieldsAdd'
            />
          </div>
          <div className='div2-Button-fieldsAdd'>
            <Label
              label={props.field2 ? props.field2 : 'IsRequired'}
              className='label-fieldsAdd'
            />
          </div>
          <div className='div3-Button-fieldsAdd'>
            <Label
              label={props.field3 ? props.field3 : 'Remove'}
              className='label-fieldsAdd'
            />
          </div>
          <div className='div4-Button-fieldsAdd'>
            <Label
              label={props.field4 ? props.field4 : 'Type'}
              className='label-fieldsAdd'
            />
          </div>
        </div>
      </div>
      {/* <div className='parentButton-fieldsAdd'> */}

      <div className='div2-main-fieldsAdd'>
        <BreakLine />
      </div>

      <div className='div3-main-fieldsAdd'>
        <ListFieldsAddComponent
          parent='parentButton-fieldsAdd'
          searchInput={
            props.testComponent1 ? (
              props.testComponent1
            ) : (
              <SearchInput
                options={abuseValidation}
                label='Add Fields'
                // sx={{ width: 180, margin: 2 }}
              />
            )
          }
          searchInputDiv='div1-Button-fieldsAdd'
          checkbox={props.testComponent2 ? props.testComponent2 : <CheckBox />}
          isRequiredDiv='div2-Button-fieldsAdd'
          icon={
            props.testComponent3 ? (
              props.testComponent3
            ) : (
              <DeleteItemIcon className='deleteItemIcon-fieldsAdd' />
            )
          }
          deleteElementDiv='div3-Button-fieldsAdd '
          type={
            props.testComponent4 ? (
              props.testComponent4
            ) : (
              <Label label='Type' className='label-fieldsAdd' />
            )
          }
          TypeDiv='div4-Button-fieldsAdd'
          fieldsList={fields}
        />

        <div className='parentButton-fieldsAdd'>
          <div className='div3-Button-fieldsAdd'></div>
          <Button
            onClick={handleOnPressAdd}
            className='button-fieldsAdd'
            name={
              <div className='wrapper-addIcon-applicationFlow'>
                <AddItemIcon className='addItemIcon-applicationFlow' />

                <Label
                  label={props.field5 ? props.field5 : 'Add field'}
                  className='label-addIcon-applicationFlow'
                />
              </div>
            }
            variant='contained'
            sx={
              props.sx2
                ? props.sx2
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
          <div className='div2-Button-fieldsAdd'>
            {props.isField6 ? null : (
              <Button
                onClick={handleOnPressAdd}
                className='button-fieldsAdd'
                name={
                  <div className='wrapper-addIcon-applicationFlow'>
                    <AddItemIcon className='addItemIcon-applicationFlow' />

                    <Label
                      label={props.field6 ? props.field6 : 'Custom field'}
                      className='label-addIcon-applicationFlow'
                    />
                  </div>
                }
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FieldsAdd;
