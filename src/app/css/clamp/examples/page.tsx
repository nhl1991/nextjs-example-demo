export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-2">
      <h1 className="text-[clamp(2.5rem,5vw+1rem,5rem)]">
        Lorem ipsum dolor sit amet.
      </h1>
      <h2 className="text-[clamp(2rem,3vw+1rem,3.75rem)]">
        이 문장은 더미 텍스트입니다.
      </h2>
      <h3 className="text-[clamp(1.5rem,2vw+1rem,2.5rem)]">
        これはダミーテキストです。
      </h3>
      <p className="text-[clamp(1rem,1vw+0.5rem,1.25rem)]">
        Dies ist ein Blindtext.
      </p>
    </div>
  );
}
