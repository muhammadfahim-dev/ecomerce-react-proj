import React from "react";

function Pagiantion() {
  return (
    <div className="mx-auto flex gap-4 items-center justify-center">
      <button className="bg-blue-500 text-white rounded px-3 py-1 cursor-pointer text-sm">
        Prev
      </button>

      <button className="px-3 py-1 cursor-pointer rounded bg-gray-300">
        1
      </button>
      <button className="px-3 py-1 cursor-pointer rounded bg-gray-300">
        2
      </button>
      <button className="px-3 py-1 cursor-pointer rounded bg-gray-300">
        3
      </button>
      <button className="px-3 py-1 cursor-pointer rounded bg-gray-300">
        4
      </button>
      <button className="px-3 py-1 cursor-pointer rounded bg-gray-300">
        5
      </button>

      <button className="bg-blue-500 text-white rounded px-3 py-1 cursor-pointer text-sm">
        Next
      </button>
    </div>
  );
}

export default Pagiantion;
