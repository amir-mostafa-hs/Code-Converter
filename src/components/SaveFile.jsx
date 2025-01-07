"use client";

import React, { useState, useContext } from "react";
import { CodeContext } from "@/context/CodeContext";

const SaveFile = () => {
  const { state, setState } = useContext(CodeContext);
  const [message, setMessage] = useState("");

  const handleDownload = (e) => {
    e.preventDefault();

    if (!state) {
      setMessage("Please enter an something before saving.");
      return;
    }

    try {
      const blob = new Blob([state], { type: "text/plain" });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "code.md";
      a.click();

      URL.revokeObjectURL(url);

      setMessage("File saved successfully!");
      setState("");
    } catch (error) {
      setMessage("An error occurred while saving the file.");
      console.error(error);
    }
  };

  return (
    <div className="pt-10">
      <form onSubmit={handleDownload}>
        <button
          type="submit"
          className="rounded-xl bg-gray-800 hover:bg-gray-700 px-5 py-2"
        >
          Save as File
        </button>
      </form>
      {message && <p className="mt-4 text-green-500">{message}</p>}
    </div>
  );
};

export default SaveFile;
