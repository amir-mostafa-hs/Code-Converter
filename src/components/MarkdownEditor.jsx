"use client";

import React, { useState, useContext, useEffect } from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "react-mde/lib/styles/css/react-mde-all.css";
import { CodeContext } from "@/context/CodeContext";

const MarkdownEditor = () => {
  const { state, setState } = useContext(CodeContext);
  const [value, setValue] = useState(state);
  const [selectedTab, setSelectedTab] = useState("write");

  useEffect(() => {
    setValue(state);
  }, [state]);

  const converter = new Showdown.Converter();

  const handleChange = (e) => {
    setValue(e);
    setState(e);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Markdown Editor</h1>
      <ReactMde
        value={value}
        onChange={handleChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(
            <ReactMarkdown
              children={markdown}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          )
        }
        childProps={{
          writeButton: {
            tabIndex: -1,
          },
        }}
        classes={{
          reactMde: "border dark:border-gray-700 rounded-lg overflow-hidden",
          toolbar: "dark:bg-gray-800 dark:border-gray-700 flex justify-between",
          textArea: "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700",
          preview: "dark:bg-gray-900 dark:text-gray-100",
          tab: "dark:text-black hover:bg-gray-300 rounded-md px-4 py-2",
          selected: "bg-gray-300 text-black rounded-md px-4 py-2",
        }}
      />
      <h2 className="text-xl font-semibold mt-6">Preview:</h2>
      <div
        className="border dark:border-gray-700 rounded-lg p-4 mt-2 dark:bg-gray-800"
        dangerouslySetInnerHTML={{ __html: converter.makeHtml(value) }}
      ></div>
    </div>
  );
};

export default MarkdownEditor;
