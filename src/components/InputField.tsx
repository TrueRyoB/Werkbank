
const InputField = () => {
  return (
  <div className="input-field gap-[4px] w-full flex-grow flex flex-col items-end pb-1">
    <textarea id="input-text" className="text-primary bg-white flex-grow w-full p-2 resize-none focus:outline-none focus:border-none focus:ring-0" placeholder="Insert some texts here..."></textarea>
    <span className="text-gray-500 flex-shrink-0">expected: 20:13</span>
  </div>
  );
};

export default InputField;