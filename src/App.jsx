import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/websiteLayout/mainComponent/Main.component';
import CompanySettings from './pages/companySettingsPage/companySettings.page';
import Users from './pages/usersPage/users.page';
import Permissions from './pages/permissionsPage/permissions.page';
import Bonus from './pages/bonusPage/bonus.page';
import PaymentMethod from './pages/paymentMethodPage/paymentMethod.page';
import ApiIntegration from './pages/apiIntegrationPage/apiIntegration.page';
import IbSettings from './pages/ibSettingsPage/ibSettings.page';
import MamSettings from './pages/mamSettingsPage/mamSettings.page';
import DynamicMargin from './pages/dynamicMarginPage/dynamicMargin.page';
import Synchronize from './pages/synchronizePage/synchronize.page';
import Questionnaire from './pages/questionnairePage/questionnaire.page';
import EmailTemplates from './pages/emailTemplatePage/emailTemplates.page';
import WebHooks from './pages/webhooksPage/webhooks.page';
import Notifications from './pages/notificationsPage/notifications.page';
import SidebarLinks from './components/websiteLayout/sidebarLinksComponent/SidebarLinks.component';
import Menu from './components/websiteLayout/menuComponent/Menu.component';
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Notifications'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<Notifications />}
              />
            }
          />
          <Route path='/test' element={<Menu />} />
          <Route
            path='/companySettings'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Company Settings'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<CompanySettings />}
              />
            }
          />
          <Route
            path='/users'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Users'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<Users />}
              />
            }
          />
          <Route
            path='/permissions'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Permissions'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<Permissions />}
              />
            }
          />
          <Route
            path='/bonus'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Bonus'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<Bonus />}
              />
            }
          />
          <Route
            path='/paymentMethod'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='PaymentMethod'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<PaymentMethod />}
              />
            }
          />
          <Route
            path='/apiIntegration'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Api Integration'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<ApiIntegration />}
              />
            }
          />
          <Route
            path='/ibSettings'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Ib Settings'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<IbSettings />}
              />
            }
          />
          <Route
            path='/mamSettings'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Mam Settings'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<MamSettings />}
              />
            }
          />
          <Route
            path='/dynamicMargin'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Dynamic Margin'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<DynamicMargin />}
              />
            }
          />
          <Route
            path='/synchronize'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Synchronize'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<Synchronize />}
              />
            }
          />
          <Route
            path='/questionnaire'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Questionnaire'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<Questionnaire />}
              />
            }
          />
          <Route
            path='/emailTemplates'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Email Templates'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<EmailTemplates />}
              />
            }
          />
          <Route
            path='/webHooks'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='WebHooks'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<WebHooks />}
              />
            }
          />
          <Route
            path='/notifications'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='Notifications'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren={<Notifications />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
