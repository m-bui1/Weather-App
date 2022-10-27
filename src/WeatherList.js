import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

function WeatherList({ weatherRes }) {
  return(
    <div className="onClickWeather">
    <Accordion defaultIndex={[0]} allowMultiple>
      {weatherRes.map((weather, index) => 
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
            {weather[1]}, {weather[4]}
          </AccordionPanel>
        </AccordionItem>
        )}
      </Accordion>
      </div>
  )
}

// function WeatherList({ weatherRes }) {
//   return(
//     <div className="WeatherRes">
//       <section className="Weather">
//         {weatherRes.map((weather, index) => 
//             <div> <p key={index}>{weather[0]}, {weather[1]}</p> </div>
//         )}
//       </section>
//     </div>
//   )
// }
export default WeatherList