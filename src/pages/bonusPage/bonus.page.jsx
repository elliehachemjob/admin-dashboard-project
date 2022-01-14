import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Description from '../../components/descriptionComponent/Description.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  DeleteItemIcon,
  RefreshIcon,
  CopyItemIcon,
} from '../../components/iconsComponent/Icons.component';
import Input from '../../components/inputComponent/Input.component';
import RadioButton from '../../components/ListComponents/radioButtonListComponent/RadioButtonList.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import ListItem from '../../components/ListComponents/listItemsComponents/ListItems.component';

function Bonus() {
  const [resetNegativeBalanceLabel, setResetNegativeBalanceLabel] = useState([
    { id: 1, label: 'Reset Negative Balance' },
  ]);
  const [excludeComment, setExcludeComment] = useState();
  const [excludeComment2, setExcludeComment2] = useState();
  const [apiKey, setApiKey] = useState();
  const [excludeComment3, setExcludeComment3] = useState();
  const [excludeComment4, setExcludeComment4] = useState();
  const [excludeComment5, setExcludeComment5] = useState();

  const [bonusRemovalCreditComment, setBonusRemovalCreditComment] = useState();

  const [abuseValidation, setAbuseValidation] = useState([
    { label: 'All Bonus abuse validation with' },
    { label: 'Email' },
    { label: 'State' },
  ]);
  const temporaryStyle = { position: 'relative', left: 350 };

  const handleExcludeCommentChange = (event) => {
    setExcludeComment(event.target.value);
  };

  const handleExcludeCommentChange2 = (event) => {
    setExcludeComment2(event.target.value);
  };

  const handleApiKeyChange3 = (event) => {
    setApiKey(event.target.value);
  };

  const handleExcludeComment3Change3 = (event) => {
    setExcludeComment3(event.target.value);
  };
  const handleExcludeComment3Change4 = (event) => {
    setExcludeComment4(event.target.value);
  };
  const handleExcludeComment3Change5 = (event) => {
    setExcludeComment5(event.target.value);
  };

  const handleBonusRemovalCreditCommentChange = (event) => {
    setBonusRemovalCreditComment(event.target.value);
  };
  const triggerApiList = [
    {
      id: 1,
      value: 'Trigger the deposit from Web API',
      label: 'Trigger the deposit from Web API',
    },
    {
      id: 2,
      value: 'Trigger the deposit from Manager API',
      label: 'Trigger the deposit from Manager API',
    },
  ];
  const removalCreditOnWithdrawalList = [
    {
      id: 1,
      value: 'All Bonus',
      label: 'All Bonus',
    },
    {
      id: 2,
      value: 'None',
      label: 'None',
    },
  ];

  const stopoutAccountList = [
    {
      id: 1,
      value: 'LBV',
      label: 'LBV',
    },
    {
      id: 2,
      value: 'None',
      label: 'None',
    },
  ];

  const stopoutAccountDescriptionItems = [
    { id: 1, value: 'None : will not use a stop out on bonus promotion' },
    {
      id: 2,
      value:
        'LBV : will only use the Stopout value set in the Losable Bonus in the bonus promotion',
    },
    {
      id: 3,
      value:
        'LBSGV: Will use an aggregation of the Stopout value set in the Losable Bonus in the bonus promotion plus the StopOut Value set in your trading platform (i.e. Group StopOut)',
    },
  ];

  const descriptions = [
    {
      id: 1,
      value:
        "When setting up a new bonus promotion if you enable the Losable Bonus option then a client's account can go negative. If the negative balance option is enabled, then when the balance of an account is negative, then it automatically resets to 0. If the setting is disabled, the balance of the account remains negative.",
    },
    {
      id: 2,
      value: 'Removal Credit Comment',
    },
    {
      id: 3,
      value:
        'You can use the Stopout Account option if you want to enable Stopout on accounts using a bonus promotion.',
    },
    {
      id: 4,
      value:
        "On an account withdrawal select an action to perform regarding the added credit. If 'All bonus' is selected on an account withdrawal remove all credit/bonus. If 'None' is selected on an account withdrawal do not remove any credit/bonus.",
    },
  ];

  return (
    <>
      {/* 1st */}
      <Label label='Bonus Settings' size={18.72} />
      {/* 2nd */}
      <ToggleList
        key={resetNegativeBalanceLabel.id}
        list={resetNegativeBalanceLabel}
      />
      {/* -3th */}
      <Description description={descriptions[0].value} style={temporaryStyle} />
      {/* -2th */}
      <Label label='Credit Comment On Bonus Removal' />
      <Input
        value={bonusRemovalCreditComment}
        onChange={handleBonusRemovalCreditCommentChange}
        label='Credit Comment On Bonus Removal'
      />
      {/* -1th */}
      <Description description={descriptions[1].value} style={temporaryStyle} />
      {/* 1th */}
      <Label label='Stopout Account' />
      <RadioButton list={stopoutAccountList} />
      {/* 2th */}
      <Description
        description={
          <>
            <Description description={descriptions[2].value} />
            <ListItem list={stopoutAccountDescriptionItems} />
          </>
        }
        style={temporaryStyle}
      />
      {/* 3th */}
      <Label label='Removal Credit on Withdrawal' />
      <RadioButton list={removalCreditOnWithdrawalList} />
      {/* 4th */}
      <Label label='Exclude comment' />
      <Input
        value={excludeComment3}
        onChange={handleExcludeComment3Change3}
        label='Withdraw'
      />
      <Input
        value={excludeComment4}
        onChange={handleExcludeComment3Change4}
        label='Ad*'
      />
      <Input
        value={excludeComment5}
        onChange={handleExcludeComment3Change5}
        label='test'
      />
      <DeleteItemIcon />
      <DeleteItemIcon />
      {/* 5th */}
      <Description description={descriptions[3].value} style={temporaryStyle} />
      <Label label='Bonus abuse validation with' />
      <SearchInput
        options={abuseValidation}
        label='Bonus abuse validation with'
      />
      {/* 6th */}
      <Label label='API KEY' />
      <RefreshIcon />
      <Input value={apiKey} onChange={handleApiKeyChange3} label='API KEY' />
      <CopyItemIcon />
      {/* 7th */}
      <Label label='Trigger API' />
      <RadioButton list={triggerApiList} />
      {/* 8th */}
      <Label label='Exclude comment' />
      <Input
        value={excludeComment}
        onChange={handleExcludeCommentChange}
        label='TFR*'
      />
      <Input
        value={excludeComment2}
        onChange={handleExcludeCommentChange2}
        label='Exclude'
      />
      <DeleteItemIcon />
      <DeleteItemIcon />
      {/* 9th */}
      <Button name='Save Changes' />
    </>
  );
}

export default Bonus;
