import { useState } from "react";

const App = () => {
  let [count, setcount] = useState(0);
  if (count < -10) {
    setcount(-10);
  }
  if (count > 20) {
    setcount(20);
  }
  function handleIncrement() {
    setcount((prev) => prev + 1);
  }
  function handleReset() {
    setcount(0);
  }
  function handleDecrement() {
    setcount((prev) => prev - 1);
  }
  return (
    <div className="w-[70vw] flex items-center  flex-col bg-slate-900 h-[70vh] shadow-2xl shadow-purple-500 rounded-xl m-auto">
      <div className="h-[70%] w-full bg-slate-100">
        <h1 className="text-5xl font-bold text-center text-slate-800">
          Counter
        </h1>
        <p className="text-5xl text-center text-slate-800">Current Count</p>
        <p
          className={`text-6xl text-center ${
            count > 10 ? "text-green-600" : count < 0 ? "text-red-600" : ""
          }`}
        >
          {count}
        </p>
      </div>
      <div className="flex items-center mt-12 justify-center gap-5">
        <button
          onClick={handleIncrement}
          className="p-4 rounded-xl text-white shadow bg-green-600 w-32 hover:bg-green-800"
        >
          Increment
        </button>
        <button
          onClick={handleReset}
          className="p-4 rounded-xl text-white shadow bg-red-600 w-32 hover:bg-red-800"
        >
          Reset
        </button>
        <button
          onClick={handleDecrement}
          className="p-4 rounded-xl text-white shadow bg-yellow-600 w-32 hover:bg-yellow-800"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
