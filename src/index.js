import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Text, Heading, Box, extendTheme, ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";
import './index.scss';
import { App } from './App';
import { Header } from './Header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ChakraProvider theme={theme} resetCSS={false}>
      <Header />,
      <Box>Hello</Box>
      <Box maxW='32rem'>
        <Heading mb={4}>Modern online and offline payments for Africa</Heading>
        <Text fontSize='xl'>
          Paystack helps businesses in Africa get paid by anyone, anywhere in the
          world
        </Text>
        <Button size='lg' colorScheme='green' mt='24px'>
          Create a free account
        </Button>
      </Box>
  </ChakraProvider>,

  document.getElementById('root')
);
