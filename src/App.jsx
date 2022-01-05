import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { createBreakpoints } from "@chakra-ui/theme-tools"

// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })

export const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <h2>さようなら</h2>
    </>
  );

};

export default App;
