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
    <div className='container1-fieldsAdd'>
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
        {/* <div className='parentButton-fieldsAdd'> */}

        <ListFieldsAddComponent
          parent='parentButton-fieldsAdd'
          searchInput={
            <SearchInput
              options={abuseValidation}
              label='Add Fields'
              // sx={{ width: 180, margin: 2 }}
            />
          }
          searchInputDiv='div1-Button-fieldsAdd'
          checkbox={<CheckBox />}
          isRequiredDiv='div2-Button-fieldsAdd'
          icon={<DeleteItemIcon />}
          deleteElementDiv='div3-Button-fieldsAdd deleteItemIcon-fieldsAdd'
          type={<Label label='Type' className='label-fieldsAdd' />}
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
                  label='Add fields '
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
            <Button
              onClick={handleOnPressAdd}
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-applicationFlow'>
                  <AddItemIcon className='addItemIcon-applicationFlow' />

                  <Label
                    label='Custom Fields'
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
          </div>
        </div>
      </>
    </div>
  );
}

export default FieldsAdd;
