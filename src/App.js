import './App.css';
import React from 'react';
import Weathers from './Weathers';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
          <Weathers />
      </div>
    </ChakraProvider>
  )
}

export default App;
