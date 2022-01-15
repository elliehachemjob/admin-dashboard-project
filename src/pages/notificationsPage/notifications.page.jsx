import React, { useState } from 'react';
import BreakLine from '../../components/breakLineComponent/BreakLine.component';
import Label from '../../components/labelComponent/Label.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import './notifications.styles.css';

function Notifications() {
  const [value, setValue] = useState();

  const [label1, setLabel1] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Contact assigned to youContact assigned to you' },
    { id: 3, label: 'Toggle to its right' },
    { id: 4, label: 'Lead assigned to you' },
  ]);
  const [label2, setLabel2] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Trading Accounts added or Closed' },
    { id: 3, label: 'Trading Accounts Request Changes' },
    { id: 4, label: 'Deposits/Withdrawals/Transfers' },
  ]);
  const [label3, setLabel3] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Application Requests' },
    { id: 3, label: 'Application Changes' },
    { id: 4, label: 'Expired Documents' },
  ]);
  const [label4, setLabel4] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Client Auto-linked to IB' },
  ]);
  const [label5, setLabel5] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Subscribe/UnSubscribe to Strategy MAM' },
    { id: 3, label: 'Subscribe/UnSubscribe to Strategy Signal' },
    { id: 4, label: 'Trading Account Auto-Linked to Strategy' },
  ]);

  const [label6, setLabel6] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Client claimed Bonus added' },
    { id: 3, label: 'Client Bonus to balance reached' },
  ]);

  const [label7, setLabel7] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Task assigned to you' },
    { id: 3, label: 'Task Reminder' },
  ]);

  const menu = [
    { value: 'Email Notification' },
    { value: 'Push Notification' },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Label label='System Notifications' size={18.72}
      
      />
      {/* 2nd */}
      <Label label='Notification Type' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Email Notification'}
      />
      {/* 3rd */}
      <Label label='Clients' />
      <ToggleList
        key={label1.id}
        list={label1}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <BreakLine />
      {/* 4th */}
      <Label label='Trader' />
      <ToggleList
        key={label2.id}
        list={label2}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <BreakLine />
      {/* 5th */}
      <Label label='OnBoarding' />
      <ToggleList
        key={label3.id}
        list={label3}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <BreakLine />
      {/* 6th */}
      <Label label='Partners' />
      <ToggleList
        key={label4.id}
        list={label4}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <BreakLine />
      {/* 7th */}
      <Label label='MAM' />
      <ToggleList
        key={label5.id}
        list={label5}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <BreakLine />
      {/* 8th */}
      <Label label='Bonus' />
      <ToggleList
        key={label6.id}
        list={label6}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <BreakLine />
      {/* 9th */}
      <Label label='Tasks' />
      <ToggleList
        key={label7.id}
        list={label7}
        parent='toggle-list-parent-notificationPage'
        div1='div1-toggle-list-parent-notificationPage'
        div2='div2-toggle-list-parent-notificationPage'
      />
      <BreakLine />
      {/* 10th */}
      <Button name='Save Changes' />
    </>
  );
}

export default Notifications;
