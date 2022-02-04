import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Test from './pages/testPage/Test.page';
import OnBoarding from './pages/onBoardingPage/onBoarding.page';
import ApplicationFlowPage from './pages/miniPages/applicationFlowPage/applicationFlow.mini.page';
import ApplicationFlowHolder from './pages/applicationFlowHolderPage/applicationFlowHolder.page';
import FlowConfiguration from './pages/miniPages/flowConfigurationPage/flowConfiguration.mini.page';
import FlowConfigurationHolder from './pages/flowConfigurationHolderPage/flowConfigurationHolder.page';
import NewApplicationFlow from './pages/newApplicationFlowPage/newApplicationFlow.page';

import Dashboard from './components/NewDashboardComponent/DashboardComponent/Dashboard.component';
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Dashboard rightSide={<Notifications />} label='Notifications' />
            }
          />
          <Route
            path='/companySettings'
            element={
              <Dashboard
                rightSide={<CompanySettings />}
                label='Company Settings'
              />
            }
          />
          <Route
            path='/users'
            element={<Dashboard rightSide={<Users />} />}
            label='Users'
          />
          <Route
            path='/permissions'
            element={
              <Dashboard rightSide={<Permissions />} label='Permissions' />
            }
          />

          <Route
            path='/bonus'
            element={<Dashboard rightSide={<Bonus />} label='Bonus' />}
          />
          <Route
            path='/paymentMethod'
            element={
              <Dashboard rightSide={<PaymentMethod />} label='Payment Method' />
            }
          />
          <Route
            path='/apiIntegration'
            element={
              <Dashboard
                rightSide={<ApiIntegration />}
                label='Api Integration'
              />
            }
          />
          <Route
            path='/ibSettings'
            element={
              <Dashboard rightSide={<IbSettings />} label='Ib Settings' />
            }
          />
          <Route
            path='/mamSettings'
            element={
              <Dashboard rightSide={<MamSettings />} label='Mam Settings' />
            }
          />
          <Route
            path='/dynamicMargin'
            element={
              <Dashboard rightSide={<DynamicMargin />} label='Dynamic Margin' />
            }
          />
          <Route
            path='/synchronize'
            element={
              <Dashboard rightSide={<Synchronize />} label='Synchronize' />
            }
          />
          <Route
            path='/notifications'
            element={
              <Dashboard rightSide={<Notifications />} label='Notifications' />
            }
          />
          <Route
            path='/questionnaire'
            element={
              <Dashboard rightSide={<Questionnaire />} label='Questionnaire' />
            }
          />
          <Route
            path='/emailTemplates'
            element={
              <Dashboard
                rightSide={<EmailTemplates />}
                label='Email Templates'
              />
            }
          />
          <Route
            path='/webHooks'
            element={<Dashboard rightSide={<WebHooks />} label='Web Hooks' />}
          />
          <Route
            path='/notifications'
            element={
              <Dashboard rightSide={<Notifications />} label='Notifications' />
            }
          />
          <Route
            path='/test'
            element={<Dashboard rightSide={<Test />} label='Test Page' />}
          />
          <Route
            path='/onBoarding'
            element={
              <Dashboard rightSide={<OnBoarding />} label='OnBoarding' />
            }
          />
          <Route
            path='/applicationFlow'
            element={
              <Dashboard
                rightSide={<ApplicationFlowPage />}
                label='OnBoarding'
              />
            }
          />
          <Route
            path='/flowConfiguration'
            element={
              <Dashboard rightSide={<FlowConfiguration />} label='OnBoarding' />
            }
          />
          <Route
            path='/applicationFlowHolder'
            element={
              <Dashboard
                rightSide={<ApplicationFlowHolder />}
                label='OnBoarding'
              />
            }
          />
          <Route
            path='/flowConfigurationHolder'
            element={
              <Dashboard
                rightSide={<FlowConfigurationHolder />}
                label='OnBoarding'
              />
            }
          />
          <Route
            path='/newApplicationFlow'
            element={
              <Dashboard
                rightSide={<NewApplicationFlow />}
                label='New Application Flow'
              />
            }
          />
        </Routes>
      </BrowserRouter>
      ,
    </>
  );
}

export default App;
