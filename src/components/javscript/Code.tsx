import P from "./ui/Text"

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <div className="w-[48rem] whitespace-pre-wrap bg-black shadow-sm shadow-white rounded-2xl text-green-300 px-8 p-2">
        <code>{children}</code>
      </div>
    </div>
  );
}
