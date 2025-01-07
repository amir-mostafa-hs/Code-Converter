"use client";

import { GoogleGenerativeAI } from "@google/generative-ai";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function convertCode(sourceCode, sourceLanguage, targetLanguage) {
  const prompt = `Convert the following ${sourceLanguage} code to ${targetLanguage}:\n\n${sourceCode}`;
  return await model.generateContent(prompt);
}

async function formatCode(code, language, styleGuide = "CS50 style50") {
  const prompt = `Format the following ${language} code according to ${styleGuide}:\n\n${code}`;
  return await model.generateContent(prompt);
}

// async function start() {
//   const result = await convertCode(sampleCode, "Python", "Javascript");
//   console.log(result);
//   console.log(result.response.text());
// }

export { convertCode, formatCode };
