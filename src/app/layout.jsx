import localFont from "next/font/local";
import "./globals.css";
import { CodeContextProvider } from "@/context/CodeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Code Convertor",
  description: "JavaScript to Python code converter and vice versa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CodeContextProvider>{children}</CodeContextProvider>
      </body>
    </html>
  );
}
