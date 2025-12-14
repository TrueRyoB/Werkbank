import './App.css'

function App() {

  return (
    <>
     <div className="header flex flex-col gap-[5px] bg-green-900 text-white p-4">
      <span>Werkbank</span>
      <span>It will generate a hashed content based on texts in an input field.</span>
     </div>
     <div className="main">
      <div className="input-pane">

      </div>
      <div className="output-pane">
        <div className="clock-container">

        </div>
        <div className="ascii-container">

        </div>
      </div>
     </div>
    </>
  )
}

export default App
