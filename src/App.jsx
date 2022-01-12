import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Button, Text, Heading, Box, extendTheme, ChakraProvider } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

export const App = () => {
  return (
    <>

    </>
  );

};

export default App;
