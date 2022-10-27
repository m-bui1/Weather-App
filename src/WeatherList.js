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
    <Accordion defaultIndex={[0]} allowMultiple>
      {weatherRes.map((weather, index) => 
        <AccordionItem>
          <h2>
            <AccordionButton bg='var(--chakra-colors-teal-600)'>
              <Box flex='1' textAlign='left' color='white'>
              <h2> {weather[2]}, {weather[3]} </h2>{weather[0]}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {weather[1]}
          </AccordionPanel>
        </AccordionItem>
        )}
      </Accordion>
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