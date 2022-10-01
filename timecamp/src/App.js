import { Box } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import GoogleCalender from './Pages/Integrations/GoogleCalender/GoogleCalender';
import TrelloTimeTracking from './Pages/Integrations/TrelloTimeTracking/TrelloTimeTracking';
// import HomePage from './Routes/HomePage';

// import Features from './Pages/Features/Features';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Pricing from './Routes/Pricing';
// import Automatic from './Pages/Features/Automatic';
function App() {
  return (
    <div className="App">
    {/* <Features/> */}
    {/* <Navbar/> */}
    {/* <HomePage/> */}
      {/* <Footer/> */}
      {/* <Pricing/> */}
      {/* <TrelloTimeTracking /> */}
      <GoogleCalender />
      {/* <Automatic/> */}
   </div>
  );
}

export default App;
