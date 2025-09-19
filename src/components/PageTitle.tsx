export default function PageTItle({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4">
      <h1 className="text-[clamp(3rem,1vw+2.5rem,5rem)]">
        {children}
      </h1>
    </div>
  );
}
