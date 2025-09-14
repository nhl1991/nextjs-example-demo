import ChevronDown from "../icon/ChevronDown";

export default function Summary({children}: {children : string}) {
  return (
    <summary className="flex">
      <h1 className="text-3xl font-bold">{children}</h1>
      <span className="transition-all group-open:rotate-180  hover:opacity-50">
        <ChevronDown />
      </span>
    </summary>
  );
}
