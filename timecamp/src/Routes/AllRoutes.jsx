import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Pricing from "./Pricing";
import Automatic from "../Pages/Features/Automatic"
import Feature from "../Pages/Features/Features";
import Invoicing from "../Pages/Features/Invoicing";
import Productivity from "../Pages/Features/Productivity";
import Reporting from "../Pages/Features/Reporting";
import Timesheet from "../Pages/Features/Timesheet";
import Login from "../Pages/Login"
import Signup from "../Pages/Signup"
import TimeSheet from "../Pages/User_Dashboard/TimeSheet";
import Projects from "../Pages/User_Dashboard/Projects";
import PrivateRouter from "./PrivateRouter";
import Users from "../Pages/User_Dashboard/Users";
import GoogleCalender from "../Pages/Integrations/GoogleCalender/GoogleCalender";
import AllIntegrations from "../Pages/Integrations/AllIntegrations/AllIntegrations";
import TrelloTimeTracking from "../Pages/Integrations/TrelloTimeTracking/TrelloTimeTracking";
import Billing from "../Pages/Features/Billing";
import Timeoff from "../Pages/Features/Timeoff";
import Blog from "../Pages/Blog/Blog";
import BlogPage from "../Pages/Blog/BlogPage";
import Tags from "../Pages/User_Dashboard/Tags";
import ReportsMenu from "../Pages/User_Dashboard/ReportsMenu";
import Summary from "../Pages/User_Dashboard/Summary";
import Detailed from "../Pages/User_Dashboard/Detailed";
import Attendance from "../Pages/User_Dashboard/Attendance";
import AccountSettings from "../Pages/User_Dashboard/AccountSettings";
import BookADemo from "../Pages/BookADemo/BookADemo";
import Asana from "../Pages/Integrations/Asana/Asana";
import ICal from "../Pages/Integrations/ICal/ICal";
import Jira from "../Pages/Integrations/Jira/Jira";
import Monday from "../Pages/Integrations/Monday/Monday";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Automatic" element={<Automatic />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/timeoff" element={<Timeoff />} />
        <Route path="/auth/login" element={<Login/>} />
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="/dashboard/timesheet" element={<PrivateRouter> <TimeSheet/></PrivateRouter>} />
        <Route path="/dashboard/reports/summary" element={<PrivateRouter> <Summary/></PrivateRouter>} />
        <Route path="/dashboard/reports/detailed" element={<PrivateRouter> <Detailed/></PrivateRouter>} />
        <Route path="/dashboard/projects" element={<PrivateRouter> <Projects/></PrivateRouter>} />
        <Route path="/dashboard/attendance" element={<PrivateRouter> <Attendance/></PrivateRouter>} />
        <Route path="/dashboard/users" element={<PrivateRouter> <Users/></PrivateRouter>} />
        <Route path="/dashboard/tags" element={<PrivateRouter> <Tags/></PrivateRouter>} />
        <Route path="/dashboard/accountSettings" element={<PrivateRouter> <AccountSettings/></PrivateRouter>} />
        <Route path="/dashboard/reports/menu" element={<PrivateRouter> <ReportsMenu/></PrivateRouter>} />
        <Route path="/trello" element={<TrelloTimeTracking/>} />
        <Route path="/googleCalender" element={<GoogleCalender />} />
        <Route path="/asana" element={<Asana />} />
        <Route path="/ical" element={<ICal />} />
        <Route path="/jira" element={<Jira />} />
        <Route path="/monday" element={<Monday />} />
        <Route path="/allIntegrations" element={<AllIntegrations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage/>}/>
        <Route path="/book" element={<BookADemo/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
