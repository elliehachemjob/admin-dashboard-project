import React from 'react';
import { Link } from 'react-router-dom';

function SidebarLink(props) {
  return (
    <Link style={{ textDecoration: 'none' }} to={props.link}>
      {props.linkName}
    </Link>
  );
}

export default SidebarLink;
