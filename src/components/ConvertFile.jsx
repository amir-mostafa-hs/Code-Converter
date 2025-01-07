"use client";

import { convertCode } from "@/utils/GenerativeAIAction";
import { useState, useContext } from "react";
import { CodeContext } from "@/context/CodeContext";

const ConvertFile = () => {
  const [language, setLanguage] = useState(false);
  const { state, setState } = useContext(CodeContext);

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value) {
      setLanguage(`Convert to ${value}`);
    } else {
      setLanguage(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let sourceLanguage = "";
    if (state.includes("```javascript")) {
      sourceLanguage = "JavaScript";
    }
    if (state.includes("```python")) {
      sourceLanguage = "Python";
    }

    let targetLanguage = "";
    if (language.includes("JavaScript")) {
      targetLanguage = "JavaScript";
    }
    if (language.includes("Python")) {
      targetLanguage = "Python";
    }

    convertCode(state, sourceLanguage, targetLanguage).then((response) => {
      setState(response.response.text());
    });
  };

  return (
    <form className="flex items-center gap-3" onSubmit={handleSubmit}>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 inline w-full p-2.5 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-700"
        onChange={handleSelect}
      >
        <option value={""} selected>
          Select Language
        </option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
      </select>

      <button
        className="rounded-xl bg-gray-800 hover:bg-gray-900 px-5 py-2 min-w-56"
        disabled={!language}
      >
        {language || "Please select language"}
      </button>
    </form>
  );
};
export default ConvertFile;
