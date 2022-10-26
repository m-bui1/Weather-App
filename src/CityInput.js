function CityInput({ userInput, content, handleContentChange, saveCity }) {
  return (
    <div className="CityInput">
      <input type="text" 
        onChange={handleContentChange}
        value={content}
      />
      <button
        onClick={saveCity} 
      >Select City</button>
    </div>
  )
}

export default CityInput