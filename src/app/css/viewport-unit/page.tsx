import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="w-[55vw]">
        <h1 className="text-fluid">Relative length units based on viewport</h1>
        <p className="text-description">
          The viewport-percentage length units are based on four different
          viewport sizes: small, large, dynamic, and default. The allowance for
          the different viewport sizes is in response to browser interfaces
          expanding and retracting dynamically and hiding and showing the
          content underneath.
        </p>
        <div>
        <ul className="flex flex-row gap-2 p-1 flex-wrap text-description">
            <li>
                <Link href="/viewport-unit/sv">Small viewport units</Link>
            </li>
            <li>
                <Link href="/viewport-unit/lv">Large viewport units</Link>
            </li>
            <li>
                <Link href="/viewport-unit/dv">Dynamic viewport units</Link>
            </li>
        </ul>
      </div>
      </div>
      
    </div>
  );
}
