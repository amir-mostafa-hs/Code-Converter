const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config({ path: "../.env" });

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

async function convertCode(sourceCode, sourceLanguage, targetLanguage) {
  const prompt = `Convert the following ${sourceLanguage} code to ${targetLanguage}:\n\n${sourceCode}`;
  return await model.generateContent(prompt);
}

async function formatCode(code, language, styleGuide = "CS50 style50") {
  const prompt = `Format the following ${language} code according to ${styleGuide}:\n\n${code}`;
  return await model.generateContent(prompt);
}

const sampleCode = `
def factorial(n):
    # اگر عدد منفی باشد
    if n < 0:
        return "عدد منفی فاکتوریل ندارد"
    # اگر عدد 0 یا 1 باشد
    elif n == 0 or n == 1:
        return 1
    # برای اعداد بزرگتر از 1
    else:
        fact = 1
        # محاسبه فاکتوریل با حلقه
        for i in range(1, n + 1):
            fact = fact * i
        return fact

# تست برنامه
number = 5
result = factorial(number)
print(f"factorial {number} is equal to: {result}")
`;

async function start() {
  const result = await convertCode(sampleCode, "Python", "Javascript");
  console.log(result);
  console.log(result.response.text());
}

start();
