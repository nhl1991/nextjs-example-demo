import Link from "next/link";

export default function Page() {
  return (
    <section
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at top, #000 35%, #733000 45%, #000 75%)`,
      }}
    >
      <div className="text-white font-bold text-2xl flex flex-col">
        <Link href="https://codepen.io/mathemartica/pen/EaxvqEK">
          Grok&apos;s Blackhole
        </Link>
        <Link href="https://codepen.io/StarKnightt/pen/VYvZeom">
          Interactive Blackhole By Prasenjit
        </Link>
      </div>
    </section>
  );
}
