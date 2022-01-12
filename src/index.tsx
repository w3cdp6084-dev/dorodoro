// import * as React from 'react';
import { Button, Text, Heading, Box, ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";
import './index.scss';
// import { App } from './App';
import { Header } from './Header';
// import reportWebVitals from './reportWebVitals';
import * as ReactDOM from 'react-dom';

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
