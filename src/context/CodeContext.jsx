"use client";

import { createContext, useState } from "react";

export const CodeContext = createContext();

export const CodeContextProvider = ({ children }) => {
  const [state, setState] = useState("# Hello, World!");

  return (
    <CodeContext.Provider value={{ state, setState }}>
      {children}
    </CodeContext.Provider>
  );
};
