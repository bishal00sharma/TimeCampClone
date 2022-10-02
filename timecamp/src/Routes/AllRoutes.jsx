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
<<<<<<< HEAD
import Tags from "../Pages/User_Dashboard/Tags";
import Attendance from "../Pages/User_Dashboard/Attendance";
import AccountSettings from "../Pages/User_Dashboard/AccountSettings";
=======
import Billing from "../Pages/Features/Billing";
import Timeoff from "../Pages/Features/Timeoff";
import Blog from "../Pages/Blog/Blog";
import BlogPage from "../Pages/Blog/BlogPage";
import Tags from "../Pages/User_Dashboard/Tags";
import ReportsMenu from "../Pages/User_Dashboard/ReportsMenu";
>>>>>>> d7c62f19c0dbacea8738a6eadd1feb38f2c372c1
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
<<<<<<< HEAD
        <Route path="/trello" element={<TrelloTimeTracking/>} />
        <Route path="/googleCalender" element={<GoogleCalender />} />
        <Route path="/allIntegrations" element={<AllIntegrations />} />
        <Route path="/dashboard/timesheet" element={<PrivateRouter> <TimeSheet/></PrivateRouter>} />
        <Route path="/dashboard/projects" element={<PrivateRouter> <Projects/></PrivateRouter>} />
        <Route path="/dashboard/users" element={<PrivateRouter> <Users/></PrivateRouter>} />
        <Route path="/dashboard/tags" element={<PrivateRouter><Tags /></PrivateRouter>} />
        <Route path="/dashboard/attendance" element={<PrivateRouter><Attendance /></PrivateRouter>} />
        <Route path="/dashboard/accountSettings" element={<PrivateRouter><AccountSettings /></PrivateRouter>} />
    </Routes>
=======
        <Route path="/dashboard/timesheet" element={<PrivateRouter> <TimeSheet/></PrivateRouter>} />
        <Route path="/dashboard/projects" element={<PrivateRouter> <Projects/></PrivateRouter>} />
        <Route path="/dashboard/users" element={<PrivateRouter> <Users/></PrivateRouter>} />
        <Route path="/dashboard/tags" element={<PrivateRouter> <Tags/></PrivateRouter>} />
        <Route path="/dashboard/reports/menu" element={<PrivateRouter> <ReportsMenu/></PrivateRouter>} />
        
        <Route path="/trello" element={<TrelloTimeTracking/>} />
        <Route path="/googleCalender" element={<GoogleCalender />} />
        <Route path="/allIntegrations" element={<AllIntegrations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage/>}/>

      </Routes>
>>>>>>> d7c62f19c0dbacea8738a6eadd1feb38f2c372c1
    </div>
  );
};

export default AllRoutes;
