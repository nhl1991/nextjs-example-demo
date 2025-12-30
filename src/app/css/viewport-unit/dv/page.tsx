import Link from "next/link";

export default function Page() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center bg-violet-500">
      <div className="w-[32rem]">
        <h1 className="text-xl">Dynamic viewport units</h1>
        <p>
          When you want the viewport to be automatically sized in response to
          browser interfaces dynamically expanding or retracting, you can use
          the dynamic viewport size. The dynamic viewport size allows the
          content you design to fit exactly within the viewport, irrespective of
          the presence of dynamic browser interfaces. The dynamic viewport unit
          is represented by the dv prefix and results in the dv*
          viewport-percentage units. The sizes of the dynamic
          viewport-percentage units are not stable, even when the viewport
          itself is unchanged.
        </p>
      </div>
       <div>
        <Link href="/viewport-unit">BACK</Link>
      </div>
    </div>
  );
}
