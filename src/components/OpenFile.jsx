"use client";

import { useContext } from "react";
import { CodeContext } from "@/context/CodeContext";

const OpenFile = () => {
  const { state, setState } = useContext(CodeContext);

  const handleReadFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      let convertToMarkdown;
      switch (file.target.files[0].name.split(".")[1]) {
        case "js":
          convertToMarkdown = "```javascript\n" + content + "\n```";
          break;
        case "py":
          convertToMarkdown = "```python\n" + content + "\n```";
          break;
        default:
          break;
      }
      setState(convertToMarkdown);
    };
    reader.readAsText(file.target.files[0]);
  };

  return (
    <div>
      <button
        className="rounded-xl bg-gray-800 hover:bg-gray-900 px-5 py-2"
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
