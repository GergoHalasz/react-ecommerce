import React, { useRef } from "react";

const Add = () => {
  const name = useRef<string>("  ");

  return (
    <form className="border rounded-md p-2 shadow-md m-2 text-left">
      <label className="text-lg">Person Name:</label>

      <input className="mt-1 p-2 block w-1/3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105"/>

      <button className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Add</button>
    </form>
  );
};

export default Add;
