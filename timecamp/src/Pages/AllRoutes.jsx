import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Routes/HomePage";
import Pricing from "../Routes/Pricing";
import Automatic from "../Pages/Features/Automatic"
import Feature from "../Pages/Features/Features";
import Invoicing from "../Pages/Features/Invoicing";
import Productivity from "../Pages/Features/Productivity";
import Reporting from "../Pages/Features/Reporting";
import Timesheet from "../Pages/Features/Timesheet";
import Timeoff from "../Pages/Features/Timeoff";
import Billing from "../Pages/Features/Billing"
import Blog from "./Blog/Blog";
import BlogPage from "./Blog/BlogPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/automatic" element={<Automatic />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/timesheet" element={<Timesheet />} />
        <Route path="/timeoff" element={<Timeoff />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;