"use client";

import { formatCode } from "@/utils/GenerativeAIAction";
import { useContext } from "react";
import { CodeContext } from "@/context/CodeContext";

const OrganizeCode = () => {
  const { state, setState } = useContext(CodeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let sourceLanguage = "";
    if (state.includes("```javascript")) {
      sourceLanguage = "JavaScript";
    }
    if (state.includes("```python")) {
      sourceLanguage = "Python";
    }

    formatCode(state, sourceLanguage).then((response) => {
      setState(response.response.text());
    });
  };

  return (
    <form className="pt-10" onSubmit={handleSubmit}>
      <button
        type="submit"
        className="rounded-xl bg-gray-800 hover:bg-gray-700 px-5 py-2"
      >
        Format Code
      </button>
    </form>
  );
};
export default OrganizeCode;
