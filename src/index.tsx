// import * as React from 'react';
import { Button, Text, Heading, Box, ChakraProvider } from '@chakra-ui/react';
import theme from "./theme/theme";
import './index.scss';
import { Header } from './Header';
import { Footer } from './Footer';
// import reportWebVitals from './reportWebVitals';
import * as ReactDOM from 'react-dom';
import Top from './tsx/views/pages/Top';

ReactDOM.render(
  <ChakraProvider theme={theme}>
      <Header />
        <Top />
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
      <Footer />
  </ChakraProvider>,

  document.getElementById('root')
);
