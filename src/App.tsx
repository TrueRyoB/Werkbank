import './App.css'

import Stopwatch from './components/Stopwatch'
import AsciiContainer from './components/AsciiContainer'
import InputField from './components/InputField'

function App() {

  return (
    <div className="flex flex-col w-full h-full items-center justify-start">
    {/* header */}
    <div className="header flex flex-col gap-[5px] bg-primary text-white p-4 w-full">
      <span className="text-2xl">Werkbank</span>
      <span>A browser text editor that generates bonsai based on your hashed text.</span>
    </div>
    {/* Main */}
    <div className="main grid bg-white gap-[4px] flex-grow w-full">
      {/* Input pane */}
      <div className="input-pane bg-gray-100 py-1 px-2">
        <div className="header flex flex-row justify-between">
          <span>Input Field</span>
          <div className="btn-container">
            <span id="clear-input" className="bg-primary-lighter py-0.5 px-1 br-1 rounded text-white">clear</span>
          </div>
        </div>
        <span className="block h-[8px]"></span>
        <InputField />
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
        <div className="ascii-pane w-full">
          <div className="header flex flex-row justify-between w-full p-2 gap-[4px]">
            <span>Bonsai art</span>
            <div className="flex flex-row gap-[4px] justify-center items-center">
              <span id="copy-ascii" className="bg-primary-lighter py-0.5 px-1 br-1 rounded text-white">copy</span>
              <span id="share-URL" className="bg-primary-lighter py-0.5 px-1 br-1 rounded text-white">share URL</span>
            </div>
          </div>
          <AsciiContainer/>
        </div>
      </div>
    </div>
    {/* footer */}
    <div className="footer h-[16px] bg-white">
      <p className="text-white">&copy; 2026 DeepNapEngine</p>
    </div>
    </div>
  );
}

export default App
