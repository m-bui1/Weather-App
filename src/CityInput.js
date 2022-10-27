import { Button, ButtonGroup, Input, IconButton,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList, } from '@chakra-ui/react'



function CityInput({ userInput, content, handleContentChange, saveCity, saveInverse, defaultCities }) {
  return (
    <div className="CityInput">
      <Input placeholder='City...' size='md' type="text" 
        onChange={handleContentChange}
        value={content}
      />
      <Button
        onClick={saveCity} 
      >Select City</Button>
      <Button
        onClick={saveInverse} 
      >Swap Time</Button>
    </div>
    
  )
}

export default CityInput