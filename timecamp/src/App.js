import React from 'react';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
function App() {

  console.log("process",process.env.BASE_URL)
  return (
    <div className="App">
      <AllRoutes/>
   </div>
  );
}

export default App;