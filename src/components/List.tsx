import React from "react";
import { useAppSelector } from "../store/store";

export const List = () => {
  const persons = useAppSelector((state) => state.person.persons);

  return (
    <div className="border border-gray-900 bg-gray-700 rounded-md p-2 shadow-xl m-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 rounded-full dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{person.id}</td>
              <td className="px-6 py-4">{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
