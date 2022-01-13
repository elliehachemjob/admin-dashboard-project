import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/websiteLayout/Main.component';
import CompanySettings from './pages/companySettings.page';
import Users from './pages/users.page';
import Permissions from './pages/permissions.page';
import Bonus from './pages/bonus.page';
import PaymentMethod from './pages/paymentMethod.page';
import ApiIntegration from './pages/apiIntegration.page';
import IbSettings from './pages/ibSettings.page';
import MamSettings from './pages/mamSettings.page';
import DynamicMargin from './pages/dynamicMargin.page';
import Synchronize from './pages/synchronize.page';
import Questionnaire from './pages/questionnaire.page';
import EmailTemplates from './pages/emailTemplates.page';
import WebHooks from './pages/webHooks.page';
import Notifications from './pages/notifications.page';
import SidebarLinks from './components/websiteLayout/SidebarLinks.component';
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
                pageTitle='My Page'
                leftSideChildren={<SidebarLinks />}
                rightSideChildren='Home Page'
              />
            }
          />
          <Route
            path='/companySettings'
            element={
              <Main
                menuTitle='Menu'
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
                pageTitle='My Page'
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
