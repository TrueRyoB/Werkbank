import './App.css'

import Stopwatch from './components/Stopwatch'

function App() {

  return (
    <div className="flex flex-col w-full h-full items-center justify-start">
    {/* header */}
    <div className="header flex flex-col gap-[5px] bg-green-900 text-white p-4 w-full">
      <span className="text-2xl">Werkbank</span>
      <span>A browser text editor that generates bonsai based on your hashed text.</span>
    </div>
    {/* Main */}
    <div className="main grid grid-cols-2 bg-white gap-[4px] flex-grow w-full">
      {/* Input pane */}
      <div className="input-pane bg-gray-100 py-1 px-2">
        <div className="header flex flex-row justify-between">
          <span>Input Field</span>
          <div className="btn-container">
            <span id="clear-input" className="bg-green-800 py-0.5 px-1 br-1 rounded text-white">clear</span>
          </div>
        </div>
        <div className="input-field w-full h-[90%] flex flex-col items-end pb-1">
          <textarea id="input-text" className="flex-grow w-full p-2 resize-none" placeholder="Insert some texts here..."></textarea>
          <span className="text-gray-500">expected: 20:13</span>
        </div>
      </div>
      {/* Output pane */}
      <div className="output-pane bg-gray-100 py-5 px-2 flex flex-col items-center justify-start gap-[8px]">
        {/* Clock container */}
        <div className="clock-container w-full flex flex-col items-center justify-start">
          <div className="header flex flex-row justify-between w-full p-2 gap-[4px]">
            <span>Stopwatch</span>
          </div>
          <Stopwatch/>
        </div>
        {/* Ascii art container */}
        <div className="ascii-container w-full">
          <div className="header flex flex-row justify-between w-full p-2 gap-[4px]">
            <span>Bonsai art</span>
            <div className="flex flex-row gap-[4px] justify-center items-center">
              <span id="copy-ascii" className="bg-green-800 py-0.5 px-1 br-1 rounded text-white">copy</span>
              <span id="share-URL" className="bg-green-800 py-0.5 px-1 br-1 rounded text-white">share URL</span>
            </div>
          </div>
          <div className="ascii-field bg-black p-1 w-full h-100">
            <pre id="output-ascii"></pre>
          </div>
        </div>
      </div>
    </div>
    {/* footer */}
    <div className="footer w-full bg-gray-100 p-1">
      <p className="text-gray-500">&copy; 2026 DeepNapEngine</p>
    </div>
    </div>
  );
}

export default App
