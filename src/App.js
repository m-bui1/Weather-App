import './App.css';
import React from 'react';
import Weathers from './Weathers';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import './Weather.css'
import ToggleModeBtn from './ToggleMode';
import ToggleTimeBtn from './SwapTime'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="semi-circle"></div>
      <ToggleModeBtn></ToggleModeBtn>
      <div className="App">
          <Weathers />
      </div>
      <div className='tips'>
      <h1>Some Cities to Try</h1>
      <UnorderedList className='UL'>
        <ListItem className='Cities'
        >Adelaide</ListItem>
        <ListItem className='Cities'
        >Sydney</ListItem>
        <ListItem className='Cities'
        >Melbourne</ListItem>
        <ListItem className='Cities'
        >Brisbane</ListItem>
        <ListItem className='Cities'
        >Darwin</ListItem>
        <ListItem className='Cities'
        >Hobart</ListItem>
        <ListItem className='Cities'
        >Canberra</ListItem>
      </UnorderedList>
      </div>
    </ChakraProvider>

  )
}

export default App;
