import Timer from './components/Timer'
import TopBar from './components/TopBar'
import { useState } from 'react'
function App() {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <>
      <TopBar></TopBar>
      <Timer isOverlay={isOverlay}></Timer>
    </>
  )
}

export default App
