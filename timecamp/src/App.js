import React from 'react';
import './App.css';
import GoogleCalender from './Pages/Integrations/GoogleCalender/GoogleCalender';
import TrelloTimeTracking from "./Pages/Integrations/TrelloTimeTracking/TrelloTimeTracking";

// import Features from './Pages/Features/Features';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">

    {/* <Features/>
    <Navbar/>
      <Footer/> */}
      {/* <TrelloTimeTracking /> */}
      <GoogleCalender />
   </div>
  );
}

export default App;
