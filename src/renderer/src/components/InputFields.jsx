const InputFields = ({ label, value, onChange, placeHolder }) => {
  return (
    <>
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} placeholder={placeHolder}></input>
    </>
  )
}

export default InputFields
