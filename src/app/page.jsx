import MarkdownEditor from "@/components/MarkdownEditor";
import OpenFile from "@/components/OpenFile";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          Hello, Welcome to code convertor
        </h1>
        <p>This program uses Google AI Studio to convert and organize code.</p>
        <OpenFile />
        <MarkdownEditor />
      </main>
    </div>
  );
}
