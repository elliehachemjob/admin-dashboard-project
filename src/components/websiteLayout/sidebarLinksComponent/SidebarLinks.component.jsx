import React from 'react';
import SidebarLink from '../sidebarLinkComponent/SidebarLink.component';

function SidebarLinks(props) {
  const links = [
    { id: 1, path: 'companySettings', name: 'companySettings' },
    { id: 2, path: 'users', name: 'users' },
    { id: 3, path: 'permissions', name: 'permissions' },
    { id: 4, path: 'bonus', name: 'bonus' },
    { id: 5, path: 'paymentMethod', name: 'paymentMethod' },
    { id: 6, path: 'apiIntegration', name: 'apiIntegration' },
    { id: 7, path: 'ibSettings', name: 'ibSettings' },
    { id: 8, path: 'mamSettings', name: 'mamSettings' },
    { id: 9, path: 'dynamicMargin', name: 'dynamicMargin' },
    { id: 10, path: 'synchronize', name: 'synchronize' },
    { id: 11, path: 'questionnaire', name: 'questionnaire' },
    { id: 12, path: 'emailTemplates', name: 'emailTemplates' },
    { id: 13, path: 'webHooks', name: 'webHooks' },
    { id: 14, path: 'notifications', name: 'notifications' },
  ];

  return (
    <>
      {links.map((link) => {
        return (
          <div>
            <SidebarLink
              key={link.id}
              link={`/${link.path}`}
              linkName={`${link.name}`}
            />
          </div>
        );
      })}
    </>
  );
}

export default SidebarLinks;
