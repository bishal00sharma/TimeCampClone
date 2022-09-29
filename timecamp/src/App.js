import React from 'react';
import './App.css';
import HomePage from './Routes/HomePage';
import TrelloTimeTracking from './Integrations/TrelloTimeTracking/TrelloTimeTracking';

import Features from './Pages/Features/Features';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
    <Features/>
    <Navbar/>
    <HomePage/>
      <Footer/>
      <TrelloTimeTracking />
   </div>
  );
}

export default App;
