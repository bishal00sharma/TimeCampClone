import { Box } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import HomePage from './Routes/HomePage';
// import TrelloTimeTracking from './Integrations/TrelloTimeTracking/TrelloTimeTracking';

// import Features from './Pages/Features/Features';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Pricing from './Routes/Pricing';
// import Automatic from './Pages/Features/Automatic';
function App() {
  return (
    <div className="App">
    {/* <Features/> */}
    <Navbar/>
    {/* <HomePage/> */}
      {/* <Footer/> */}
      <Pricing/>
      {/* <TrelloTimeTracking /> */}
      {/* <Automatic/> */}
   </div>
  );
}

export default App;
