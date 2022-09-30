import { Box } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {
  return (
    <Box className="App">
      <Signup />
      {/* <Login /> */}
   </Box>
  );
}

export default App;
