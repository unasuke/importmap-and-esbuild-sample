import React, { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(() => counter + 1)
  }
  const decrement = () => {
    setCounter(() => counter - 1)
  }
  return (
    <>
      <input
        type="text"
        value={counter}
        readOnly
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mb-3"
      />
      <button
      onClick={increment}
        className="rounded bg-white px-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-16 mr-2"
      >
        +1
      </button>
      <button
      onClick={decrement}
        className="rounded bg-white px-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-16"
      >
        -1
      </button>
    </>
  );
};
