"use client";

import { useState } from "react";

const OpenFile = () => {
  const [codeSource, setCodeSource] = useState("");

  const handleReadFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      setCodeSource(content);
    };
    reader.readAsText(file.target.files[0]);
  };
  console.log(codeSource);

  return (
    <div>
      <button
        className="rounded-xl bg-emerald-500 hover:bg-emerald-600 px-5 py-2"
        onClick={() => document.getElementById("fileInput").click()}
      >
        Select Code Base File
      </button>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleReadFile}
      />
    </div>
  );
};

export default OpenFile;
