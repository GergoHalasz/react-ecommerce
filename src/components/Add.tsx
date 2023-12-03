import React, { useRef } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson } from "../store/personSlice";
import { List } from "./List";

const Add = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <List></List>
      <form className="border border-red-950 rounded-md p-2 shadow-md m-2 text-left flex flex-row justify-evenly items-center">
        <label className="text-lg">Person Name:</label>

        <input
          onChange={(e) => (name.current = e.target.value)}
          className="mt-1 p-2 block w-1/3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300 ease-in-out transform hover:scale-105 text-black"
        />

        <button
          type="button"
          onClick={() => dispatch(addPerson({ name: name.current }))}
          className="bg-purple-500 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
