import './App.css'

function App() {

  return (
    <>
    {/* header */}
    <div className="header flex flex-col gap-[5px] bg-green-900 text-white p-4">
      <span className="text-2xl">Werkbank</span>
      <span>A browser text editor that generates bonsai based on your hashed text.</span>
    </div>
    {/* Main */}
    <div className="main">
      {/* Input pane */}
      <div className="input-pane">

      </div>
      {/* Output pane */}
      <div className="output-pane">
        {/* Clock container */}
        <div className="clock-container">

        </div>
        {/* Ascii art container */}
        <div className="ascii-container">

        </div>
      </div>
    </div>
    </>
  )
}

export default App
