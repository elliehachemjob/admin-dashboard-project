import React, { useState } from 'react';
import ExpandableAccordion from '../expandableAccordionComponent/ExpandableAccordion.component';
import Input from '../inputComponent/Input.component';
import { makeStyles } from '@material-ui/core/styles';
import ToggleList from '../ListComponents/toggleListComponent/ToggleList.component';
import PasswordExpand from './passwordComponentFlowConfiguration/PasswordExpand';
import './buildForm.styles.css';
import LegalDisclaimerExpand from './legalDisclaimerComponentFlowConfiguration/LegalDisclaimerExpand.component';

function BuildForm() {
  const [array, setArray] = useState();
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '',
      backgroundColor: '',
      minWidth: 189.3,
      borderRadius: '10px',
      opacity: 1,

      '&:hover,&:focus': {
        border: ' ',
        backgroundColor: '',
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

  const [label1, setLabel1] = useState([
    { id: 1, label: 'Turn on/off notifications' },
  ]);

  const classes = useStyles();

  return (
    <>
      {/* 1st  */}
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='Email'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here'
            testComponent1={
              <Input
                label='Password'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
        section2={<PasswordExpand />}
      />
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='Full Name'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='First Name'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='Last Name'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='Confirm Password'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='Country'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='Phone Number'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here'
            testComponent1={
              <Input
                label='Legal Disclaimer'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
        section2={<LegalDisclaimerExpand />}
      />
      <ExpandableAccordion
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-notificationPage'
            div1='div1-toggle-list-parent-notificationPage'
            div2='div2-toggle-list-parent-notificationPage-exception-here-two'
            testComponent1={
              <Input
                label='GETCode'
                style={{ width: 300 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
    </>
  );
}

export default BuildForm;