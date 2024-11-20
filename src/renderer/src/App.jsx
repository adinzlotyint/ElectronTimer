import Timer from './components/Timer'
import TopBar from './components/TopBar'
import { useState } from 'react'
function App() {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <>
      <TopBar></TopBar>
      <Timer isOverlay={isOverlay}></Timer>
      <h1 className="text-2xl text-red-800">Hello world</h1>
    </>
  )
}

export default App
