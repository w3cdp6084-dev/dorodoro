import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
// import { ChakraProvider } from "@chakra-ui/react";
// import theme from "./theme/theme";
import './index.css';
import { App } from './App';
import { Header } from './Header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
