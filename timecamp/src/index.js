import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
);


