const InputFields = ({ label, value, onChange, placeHolder }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value
    if (/^\d+$/.test(inputValue)) {
      onChange(e)
    }
  }

  return (
    <div className="text-3xl">
      <label className="text-stone-600">{label}:</label>
      <input
        type="number"
        className="w-20 bg-transparent text-green-600"
        value={value}
        onChange={handleInputChange}
        placeholder={placeHolder}
      ></input>
    </div>
  )
}

export default InputFields
