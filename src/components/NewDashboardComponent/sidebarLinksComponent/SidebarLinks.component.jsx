import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PaymentIcon from '@mui/icons-material/Payment';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import WebhookIcon from '@mui/icons-material/Webhook';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from 'react-router-dom';
import SidebarLink from '../sidebarLinkComponent/SidebarLink.component';
import './sidebarLinks.styles.css';

function SidebarLinks(props) {
  const links = [
    {
      id: 1,
      path: '/companySettings',
      name: 'Company Settings',
      icon: <ApartmentIcon />,
    },
    { id: 2, path: '/users', name: 'Users', icon: <GroupIcon /> },
    {
      id: 3,
      path: '/permissions',
      name: 'Permissions',
      icon: <SecurityIcon />,
    },
    { id: 4, path: '/bonus', name: 'Bonus', icon: <AutoFixHighIcon /> },
    {
      id: 5,
      path: '/paymentMethod',
      name: 'Payment Method',
      icon: <PaymentIcon />,
    },
    {
      id: 6,
      path: '/apiIntegration',
      name: 'Api Integration',
      icon: <IntegrationInstructionsIcon />,
    },
    {
      id: 7,
      path: '/ibSettings',
      name: 'Ib Settings',
      icon: <VolunteerActivismIcon />,
    },
    {
      id: 8,
      path: '/mamSettings',
      name: 'Mam Settings',
      icon: <AdminPanelSettingsIcon />,
    },
    {
      id: 9,
      path: '/dynamicMargin',
      name: 'Dynamic Margin',
      icon: <SavedSearchIcon />,
    },
    {
      id: 10,
      path: '/synchronize',
      name: 'Synchronize',
      icon: <CloudSyncIcon />,
    },
    {
      id: 11,
      path: '/questionnaire',
      name: 'Questionnaire',
      icon: <QuestionAnswerIcon />,
    },
    {
      id: 12,
      path: '/emailTemplates',
      name: 'Email Templates',
      icon: <MarkEmailReadIcon />,
    },
    { id: 13, path: '/webHooks', name: 'Web Hooks', icon: <WebhookIcon /> },
    {
      id: 14,
      path: '/notifications',
      name: 'Notifications',
      icon: <NotificationsActiveIcon />,
    },
    {
      id: 15,
      path: '/modalUsage',
      name: 'modal',
      icon: <NotificationsActiveIcon />,
    },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <SidebarLink
            key={link.id}
            className='link'
            link={link.path}
            icon={link.icon}
            text={link.name}
          />
        );
      })}
    </>
  );
}

export default SidebarLinks;
