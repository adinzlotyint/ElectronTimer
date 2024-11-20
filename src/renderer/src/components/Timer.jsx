import InputField from './InputFields'
import { useState, useEffect } from 'react'
import alarm from '../assets/sounds/alarm.mp3'
const Timer = ({ isOverlay }) => {
  const [isEditing, setIsEditing] = useState(true)
  const [minutes, setMinutes] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const [hours, setHours] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const audio = new Audio(alarm)

  useEffect(() => {
    let intervalId
    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1)
        } else {
          if (minutes === 0 && hours === 0) {
            audio.play()
            clearInterval(intervalId)
            setIsActive(false)
          } else {
            if (minutes === 0) {
              setHours((hours) => hours - 1)
              setMinutes(59)
            } else {
              setMinutes((minutes) => minutes - 1)
            }
            setSeconds(59)
          }
        }
      }, 1000)
    } else {
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [isActive, hours, minutes, seconds])

  return (
    <>
      {isEditing ? (
        //Time setup
        <div className="flex flex-col justify-center">
          <InputField
            label={'Hours'}
            value={hours}
            onChange={(e) =>
              e.target.value < 25 ? setHours(parseInt(e.target.value)) : setHours(24)
            }
          ></InputField>
          <InputField
            label={'Minutes'}
            value={minutes}
            onChange={(e) =>
              e.target.value < 61 ? setMinutes(parseInt(e.target.value)) : setMinutes(60)
            }
          ></InputField>
          <InputField
            label={'Seconds'}
            value={seconds}
            onChange={(e) =>
              e.target.value < 61 ? setSeconds(parseInt(e.target.value)) : setSeconds(60)
            }
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
        <>
          <div className="flex justify-center">
            <h1 className="text-green-500 text-6xl">{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</h1>
          </div>
          <div
            id="timer-buttons"
            className="flex justify-center text-gray-500 text-4xl px-2 bg-black bg-opacity-30 rounded-xl mt-2"
          >
            {isActive ? (
              <>
                <button className="mr-2" onClick={() => setIsActive(false)}>
                  &#120284;&#120284;
                </button>
                <button
                  onClick={() => {
                    setIsActive(false)
                    setHours(0)
                    setMinutes(0)
                    setSeconds(0)
                  }}
                >
                  &#9632;
                </button>
              </>
            ) : (
              <>
                <button className="mr-2" onClick={() => setIsActive(true)}>
                  ➤
                </button>
                <button onClick={() => setIsEditing(true)}>&#9998;</button>
              </>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default Timer
