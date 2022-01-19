import React, { useState } from 'react';
import './questionnaireModal.mini.styles.css';
import Label from '../../../components/labelComponent/Label.component';
import Input from '../../../components/inputComponent/Input.component';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  EditItemIcon,
  DeleteItemIcon,
} from '../../../components/iconsComponent/Icons.component';
import SpecialDropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import { makeStyles } from '@material-ui/core/styles';
import RadioButton from '../../../components/ListComponents/radioButtonListComponent/RadioButtonList.component';
import ToggleList from '../../../components/ListComponents/toggleListComponent/ToggleList.component';
// drop down case

function QuestionnaireAddModal(props) {
  const [questionName, setQuestionName] = useState();
  const [questionLabel, setQuestionLabel] = useState();
  const [label1, setLabel1] = useState();
  const [label2, setLabel2] = useState();
  const [value, setValue] = useState();
  const [questionLabelText, setQuestionLabelText] = useState('Question Label');
  const [questionLabelShow, setQuestionLabelShow] = useState(true);

  const [dropdownLabel, setDropdownLabel] = useState([
    { id: 1, label: 'MultiSelect' },
    { id: 2, label: 'Searchable' },
  ]);

  const [list, setList] = useState([
    { id: 1, label: 'MultiSelect' },
    { id: 2, label: 'Searchable' },
  ]);

  // const [list2, setList2] = useState([{ id: 1, label: 'WithCheckbox' }]);

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
        opacity: 1,
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
    setQuestionLabelShow(true);

    if (event.target.value === 'Title') {
      setQuestionLabelText('Title');
    }

    if (event.target.value === 'Declaration') {
      setQuestionLabelText('Content');
      setQuestionLabelShow(false);
    }
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

  const booleanList = [
    {
      id: 1,
      value: 'Yes / No Question',
      label: 'Yes / No Question',
    },
    {
      id: 2,
      value: 'True / False Question',
      label: 'True / False Question',
    },
  ];

  const handleOnPressAdd = () => {
    if (value === 'TextBox') {
      alert('TextBox Added');
    }
    if (value === 'DropDown') {
      alert('DropDown Added');
    }
    if (value === 'Boolean') {
      alert('Boolean Added');
    }
    if (value === 'CheckBox') {
      alert('CheckBox Added');
    }
    if (value === 'Declaration') {
      alert('Declaration Added');
    }
    if (value === 'Date Selector') {
      alert('Date Selector Added');
    }
    if (value === 'Title') {
      alert('Title Added');
    }
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
          {questionLabelShow ? (
            <div className='div2-questionnaireModal'>
              <Label
                label={questionLabelText}
                className='label-questionnaireModal'
              />
              <div>
                <Input
                  value={questionLabel}
                  onChange={handleQuestionLabelChange}
                  label={questionLabelText}
                  className='input-questionnaireModal'
                  style={{ margin: 1.8 }}
                  textFieldStyles={classes.textField}
                />
              </div>
            </div>
          ) : (
            <div className='div2-questionnaireModal'>
              <Label
                label='Question Type'
                className='label-questionnaireModal'
              />
              <SpecialDropdown
                items={menu}
                label={value}
                handleChange={handleChange}
                value={value}
                inputLabel={value ? value : 'TextBox'}
                sx={{ m: 1.9, width: 189.3 }}
              />
            </div>
          )}

          {questionLabelShow ? (
            <div className='div3-questionnaireModal'>
              <Label
                label='Question Type'
                className='label-questionnaireModal'
              />
              <SpecialDropdown
                items={menu}
                label={value}
                handleChange={handleChange}
                value={value}
                inputLabel={value ? value : 'TextBox'}
                sx={{ m: 1.9, width: 189.3 }}
              />
            </div>
          ) : (
            ''
          )}

          <div className='div4-questionnaireModal'>
            <Button
              // className='button-questionnaireModal'
              onClick={handleOnPressAdd}
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
            {value === 'DropDown' && (
              <ToggleList
                key={dropdownLabel.id}
                list={dropdownLabel}
                parent='toggle-list-parent-questionnaireModal'
                div1='div1-toggle-list-parent-questionnaireModal'
                div2='div2-toggle-list-parent-questionnaireModal'
              />
            )}

            {value === 'Boolean' && (
              <>
                <Label
                  label='Choose Your Own Values'
                  className='label-questionnaireModal'
                />

                <RadioButton list={booleanList} style={{ marginLeft: 15 }} />
              </>
            )}

            {value === 'Declaration' && (
              <div className='wrapper-questionnaireModal'>
                <Input
                  value={label2}
                  onChange={handleLabel2Change}
                  label='Type Contents Here...'
                  className='input-questionnaireModal'
                  style={{ margin: 1.8, width: 200 }}
                  multiline={true}
                  rows={2}
                  maxRows={2}
                  textFieldStyles={classes.textField}
                />
                {/* <ToggleList
                  key={list2.id}
                  list={list2}
                  parent='toggle-list-parent-questionnaireModal'
                  div1='div1-toggle-list-parent-questionnaireModal'
                  div2='div2-toggle-list-parent-questionnaireModal'
                /> */}
              </div>
            )}
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
