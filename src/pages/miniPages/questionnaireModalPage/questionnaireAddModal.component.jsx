import React, { useState } from 'react';
import './questionnaireModal.mini.styles.css';
import Label from '../../../components/labelComponent/Label.component';
import Input from '../../../components/inputComponent/Input.component';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  EditItemIcon,
  DeleteItemIcon,
} from '../../../components/iconsComponent/Icons.component';
import ToggleList from '../../../components/ListComponents/toggleListComponent/ToggleList.component';
import SpecialDropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import { makeStyles } from '@material-ui/core/styles';

// drop down case

function QuestionnaireAddModal(props) {
  const [questionName, setQuestionName] = useState();
  const [questionLabel, setQuestionLabel] = useState();
  const [label1, setLabel1] = useState();
  const [label2, setLabel2] = useState();
  const [value, setValue] = useState();

  const [list, setList] = useState([
    { id: 1, label: 'MultiSelect' },
    { id: 2, label: 'Searchable' },
  ]);

  const menu = [
    { value: 'TextBox' },
    { value: 'DropDown' },
    { value: 'Boolean' },
    { value: 'CheckBox' },
    { value: 'Declaration' },
    { value: 'Date Selector' },
    { value: 'Title' },
  ];

  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '1px solid #94b3fd20',
      backgroundColor: '#94b3fd15',
      borderRadius: '10px',
      opacity: 0.3,
      '&:hover,&:focus': {
        border: '1px solid #94b3fd20',
        backgroundColor: '#94b3fd20',
        opacity: 0.5,
      },
      button: {
        backgroundColor: '#11468F',
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: '#11468F50',
          borderRadius: '20px',
        },
      },
      dropdown: {
        border: '2px solid #94b3fd20',
        backgroundColor: '#94b3fd15',
        minWidth: 189.3,
        borderRadius: '10px',
        opacity: 0.3,
        '&:hover,&:focus': {
          border: '2px solid #94b3fd20',
          backgroundColor: '#94b3fd20',
          opacity: 0.3,
        },
      },
    },
  }));

  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleQuestionNameChange = (event) => {
    setQuestionName(event.target.value);
  };

  const handleQuestionLabelChange = (event) => {
    setQuestionLabel(event.target.value);
  };

  const handleLabel1Change = (event) => {
    setLabel1(event.target.value);
  };

  const handleLabel2Change = (event) => {
    setLabel2(event.target.value);
  };

  const SpecialFont = () => {
    return <h1></h1>;
  };

  return (
    <>
      {/* 1st */}

      <div className='container1-questionnaireModal'>
        <div className='parent-questionnaireModal'>
          <div className='div1-questionnaireModal'>
            <Label label='Question Name' className='label-questionnaireModal' />
            <Input
              value={questionName}
              onChange={handleQuestionNameChange}
              label='Question Name'
              className='input-questionnaireModal'
              style={{ margin: 1.8 }}
              textFieldStyles={classes.textField}
            />
          </div>
          <div className='div2-questionnaireModal'>
            <Label
              label='Question Label'
              className='label-questionnaireModal'
            />
            <div>
              <Input
                value={questionLabel}
                onChange={handleQuestionLabelChange}
                label='Question Label'
                className='input-questionnaireModal'
                style={{ margin: 1.8 }}
                textFieldStyles={classes.textField}
              />
            </div>
          </div>
          <div className='div3-questionnaireModal'>
            <Label label='Question Type' className='label-questionnaireModal' />
            <SpecialDropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'TextBox'}
              sx={{ m: 1.9, width: 189.3 }}
            />
          </div>
          <div className='div4-questionnaireModal'>
            <Button
              // className='button-questionnaireModal'
              name='Add'
              variant='contained'
              sx={{
                backgroundColor: '#11468F',
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#11468F50',
                  borderRadius: '20px',
                },
              }}
            />
          </div>
          <div className='div5-children-questionnaireModal'>
            {props.children}
          </div>
        </div>
        {/* <Label
          label='Edit Question'
          size={18.72}
          className='header-questionnaireModal'
        /> */}
        {/* 2nd */}
        {/* 3rd */}
        {/* 4th */}
      </div>
      {/* 5th */}
      {/* <ToggleList
        key={list.id}
        list={list}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      /> */}
      {/* 6th */}
      {/* <Label label='Options' className='label-questionnaireModal' />
      <Button className='button-questionnaireModal' name='Add' /> */}
      {/* 7th */}
      {/* <Label label='Label' className='label-questionnaireModal' />
      <Input
        value={label1}
        onChange={handleLabel1Change}
        label='option 1'
        className='input-questionnaireModal'
        style={{ margin: 1.8 }}
      /> */}
      {/* <EditItemIcon />
      <DeleteItemIcon /> */}
      {/* 8th */}
      {/* <Label label='Label' className='label-questionnaireModal' />
      <Input
        value={label2}
        onChange={handleLabel2Change}
        label='option 2'
        className='input-questionnaireModal'
        style={{ margin: 1.8 }}
      /> */}
      {/* <EditItemIcon />
      <DeleteItemIcon /> */}
      {/* 9th */}
    </>
  );
}

export default QuestionnaireAddModal;
