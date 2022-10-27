import { Button, ButtonGroup, Input } from '@chakra-ui/react'

function CityInput({ userInput, content, handleContentChange, saveCity }) {
  return (
    <div className="CityInput">
      <Input placeholder='City...' size='md' type="text" 
        onChange={handleContentChange}
        value={content}
      />
      <Button
        onClick={saveCity} 
      >Select City</Button>
    </div>
  )
}

export default CityInput