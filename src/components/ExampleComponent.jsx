"use client";

import { CodeContext } from "@/context/CodeContext";
import React, { useContext } from "react";

const ExampleComponent = () => {
  const { state, setState } = useContext(CodeContext);

  const handleChange = () => {
    setState("New Context Value!");
  };

  return (
    <div className="p-6 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-bold">Context Value: {state}</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleChange}
      >
        Change Context Value
      </button>
    </div>
  );
};

export default ExampleComponent;
