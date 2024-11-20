import InputField from './InputFields'
import { useState } from 'react'

const Timer = ({ isOverlay }) => {
  const [isEditing, setIsEditing] = useState(true)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)

  return (
    <>
      <div>
        {isEditing ? (
          //Time setup
          <div className="flex flex-col justify-center">
            <InputField
              label={'Hours'}
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
            ></InputField>
            <InputField
              label={'Minutes'}
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            ></InputField>
            <InputField
              label={'Seconds'}
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            ></InputField>
            <button
              className="bg-blue-500 text-stone-200 px-20 py-1 rounded-xl text-xl mt-1"
              onClick={() => setIsEditing(false)}
            >
              &#10004;
            </button>
          </div>
        ) : (
          //Timer
          <div className="flex justify-center">
            <h1 className="text-green-500 text-6xl">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
          </div>
        )}
      </div>
    </>
  )
}

export default Timer
