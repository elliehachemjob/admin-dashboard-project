import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import DropdownTagSelector from '../../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';

import './conditionsConfiguration.mini.styles.css';

function ConditionsConfiguration() {
  const [label1, setLabel1] = useState([
    {
      id: 1,
      label: (
        <Label
          label='LeaderBoard'
          className='toggle-label-conditionsConfiguration'
        />
      ),
    },
  ]);

  const [nationalityButtonColor, setNationalityButtonColor] =
    useState('#2B3A67');
  const [countryOfResidence, setCountryOfResidence] = useState('#2B3A67');
  const [rejectUScitizens, setRejectUScitizens] = useState('#2B3A67');

  const handleNationalityClicked = () => {
    setNationalityButtonColor('#FFC482');
  };
  const handleCountryOfResidenceClicked = () => {
    setCountryOfResidence('#FFC482');
  };
  const handleRejectUScitizensClicked = () => {
    setRejectUScitizens('#FFC482');
  };

  return (
    <div className='parent-conditionsConfiguration'>
      {/* 1st */}
      <div className='div1-layout-walletConfiguration'>
        <Label
          label='Rejected Countries'
          className='header-conditionsConfiguration'
        />
        {/* <Label
          label='Select Countries You Want to Reject'
          className='header-conditionsConfiguration'
        /> */}
        <DropdownTagSelector
          sx={{
            width: 189.3,
            marginLeft: 0.7,
            width: 165,
          }}
        />
      </div>
      <div className='div2-layout-walletConfiguration'>
        {/* <div className=''>
          <Label
            label='Condition Types'
            className='header-conditionsConfiguration'
          />
        </div> */}
        <div className=''>
          <Label
            label='Select Condition Type'
            className='header-conditionsConfiguration'
          />
        </div>
        <div className=''>
          <div className='button-conditionsConfiguration'>
            <Button
              onClick={handleNationalityClicked}
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Nationality '
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: nationalityButtonColor,
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
            />
          </div>
          <div className='button-conditionsConfiguration'>
            <Button
              onClick={handleCountryOfResidenceClicked}
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Country of residence '
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: countryOfResidence,
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
            />
          </div>
          <div className='button-conditionsConfiguration'>
            <Button
              onClick={handleRejectUScitizensClicked}
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Reject U.S citizens'
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: rejectUScitizens,
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
            />
          </div>
          <div className='button-conditionsConfiguration'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Apply '
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: '#2B3A67',
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#5E807F',
                  borderRadius: '10px',
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className='div3-layout-walletConfiguration'>
        <ToggleList
          key={label1.id}
          list={label1}
          parent='toggle-list-parent-walletConfiguration'
          div1='div1-toggle-list-parent-walletConfiguration'
          div2='div2-toggle-list-parent-walletConfiguration'
        />
      </div>
      {/* 2nd */}

      {/* 3rd */}
    </div>
  );
}

export default ConditionsConfiguration;
