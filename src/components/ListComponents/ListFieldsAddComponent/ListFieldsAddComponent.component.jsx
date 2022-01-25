import React, { useState } from 'react';
import SearchInput from '../../searchInputComponent/SearchInput.component';
import { DeleteItemIcon } from '../../iconsComponent/Icons.component';
import Button from '../../FlexibleButtonComponent/FlexibleButton.component';

function ListFieldsAddComponent(props) {
  return (
    <div>
      {props.fieldsList.map((item) => {
        return (
          <div className={props.parent}>
            <div className={props.searchInputDiv}>{props.searchInput}</div>
            <div className={props.isRequiredDiv}>{props.checkbox}</div>
            <div className={props.deleteElementDiv}>{props.icon}</div>
            <div className={props.TypeDiv}>{props.type}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListFieldsAddComponent;