import React from 'react';
import './App.css';
import TrelloTimeTracking from './Integrations/TrelloTimeTracking/TrelloTimeTracking';

import Features from './Pages/Features/Features';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Tags from './Pages/Backend Frontend/Tags';
function App() {
  return (
    <div className="App">

    {/* <Features/>
    <Navbar/>
      <Footer/>
      <TrelloTimeTracking /> */}
      <Tags />
      
   </div>
  );
}

export default App;
