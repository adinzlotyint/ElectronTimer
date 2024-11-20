const TopBar = () => {
  const handleClose = () => {
    window.electron.ipcRenderer.send('close-window')
  }

  const handleMinimize = () => {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <>
      <div className="bg-blue-500 w-screen h-7 z-0" style={{ WebkitAppRegion: 'drag' }}></div>
      <div id="control-buttons" className="absolute top-0 right-2 z-[1]">
        <button
          id="minimize-button"
          onClick={handleMinimize}
          style={{ WebkitAppRegion: 'no-drag', cursor: 'pointer' }}
        >
          &#128469;
        </button>
        <button
          id="close-button"
          onClick={handleClose}
          style={{ WebkitAppRegion: 'no-drag', cursor: 'pointer' }}
        >
          &#x2715;
        </button>
      </div>
    </>
  )
}

export default TopBar
