import './App.css';
import React from 'react';
import Weathers from './Weathers';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './Weather.css'
import ToggleModeBtn from './ToggleMode';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="semi-circle"></div>
      <ToggleModeBtn></ToggleModeBtn>
      <div className="App">
          <Weathers />
      </div>

    </ChakraProvider>

  )
}

export default App;
