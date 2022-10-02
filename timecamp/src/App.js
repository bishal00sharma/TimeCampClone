import React from "react"
import "./App.css"
import TimeSheet from './Pages/User_Dashboard/TimeSheet';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      <TimeSheet/>
   </div>
  );
}

export default App;