import './App.css'

import Stopwatch from './components/Stopwatch'

function App() {

  return (
    <>
    {/* header */}
    <div className="header flex flex-col gap-[5px] bg-green-900 text-white p-4">
      <span className="text-2xl">Werkbank</span>
      <span>A browser text editor that generates bonsai based on your hashed text.</span>
    </div>
    {/* Main */}
    <div className="main grid grid-cols-2 bg-white gap-[4px]">
      {/* Input pane */}
      <div className="input-pane bg-gray-100 py-1 px-2">
        <div className="header flex flex-row justify-between">
          <span>Input Field</span>
          <div className="btn-container">
            <span className="bg-green-800 py-0.5 px-1 br-1 rounded text-white">clear</span>
          </div>
        </div>
        <div className="input-field w-full flex flex-col items-end">
          <textarea id="input-text" className="w-full p-2 resize-none" placeholder="Insert some texts here..."></textarea>
          <span className="text-gray-500">expected: 20:13</span>
        </div>
      </div>
      {/* Output pane */}
      <div className="output-pane bg-gray-100 py-1 px-2">
        {/* Clock container */}
        <div className="clock-container">
          <Stopwatch/>
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
