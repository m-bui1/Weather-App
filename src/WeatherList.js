import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  IconButton
} from '@chakra-ui/react'

import { TimeIcon } from '@chakra-ui/icons'

function WeatherList({ weatherRes, weatherInverse }) {
  // let arr = []
  // let toggleTime = true
  // if(toggleTime){
  //   arr = weatherRes
  // } else if(toggleTime === false){
  //   arr = weatherInverse
  // }
  return(
    <div className="onClickWeather">
    <Accordion defaultIndex={[0]} allowMultiple>
      {
      weatherRes.map((weather, index) => 
        <AccordionItem>
          <h2>
            <AccordionButton className='tabs' bg='var(--chakra-colors-teal-600)'>
              <Box flex='1' textAlign='left' color='lightblue'>
              <h2> {weather[2]}, {weather[3]} </h2>{weather[0]}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color='black'>
            {weather[1]}, {weather[4]}, <img src={`https://openweathermap.org/img/wn/${weather[5]}.png`} alt="" srcset="" />
          </AccordionPanel>
        </AccordionItem>
        )}
      
      </Accordion>
      </div>
  )
}

export default WeatherList