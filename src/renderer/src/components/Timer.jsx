import InputField from './InputFields'
import { useState } from 'react'

const Timer = ({ isOverlay }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)

  return (
    <>
      <div>
        {isEditing ? (
          //Time setup
          <div>
            <InputField label={'Hours'}></InputField>
            <InputField label={'Minutes'}></InputField>
            <InputField label={'Seconds'}></InputField>
          </div>
        ) : (
          //Timer
          <div></div>
        )}
      </div>
    </>
  )
}

export default Timer
