import { Box } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import HomePage from './Routes/HomePage';
// import TrelloTimeTracking from './Integrations/TrelloTimeTracking/TrelloTimeTracking';
import Tags from "./Pages/User_Dashboard/Tags"
import Dashboard from './Pages/User_Dashboard/Dashboard';
import Summary from './Pages/User_Dashboard/Summary';
import Attendance from './Pages/User_Dashboard/Attendance';
import Users from "./Pages/User_Dashboard/Users"
function App() {
  return (
    <div className="App">
      {/* <Tags /> */}
      {/* <AccountSettings /> */}
      {/* <Dashboard /> */}
      {/* <Attendance /> */}
      {/* <Users /> */}
      <Summary />
   </div>
  );
}

export default App;
