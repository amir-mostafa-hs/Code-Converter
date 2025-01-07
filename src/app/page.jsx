import ConvertFile from "@/components/ConvertFile";
import MarkdownEditor from "@/components/MarkdownEditor";
import OpenFile from "@/components/OpenFile";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-center">
          Hello, Welcome to code convertor
        </h1>
        <p>This program uses Google AI Studio to convert and organize code.</p>
        <div className="flex items-center gap-3">
          <OpenFile />
          <ConvertFile />
        </div>
        <MarkdownEditor />
      </main>
    </div>
  );
}
