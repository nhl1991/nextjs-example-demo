import Link from "next/link";

export default function Page() {
  return (
    <div className="w-dvw h-dvh flex flex-col items-center justify-center bg-violet-500">
      <div className="w-[32rem]">
        <h1 className="text-xl">Small viewport units</h1>
        <p>
          When you want the smallest possible viewport in response to browser
          interfaces expanding dynamically, you should use the small viewport
          size. The small viewport size allows the content you design to fill
          the entire viewport when browser interfaces are expanded. Choosing
          this size might also possibly leave empty spaces when browser
          interfaces retract. For example, an element that is sized using
          viewport-percentage units based on the small viewport size, the
          element will fill the screen perfectly without any of its content
          being obscured when all the dynamic browser interfaces are shown. When
          those browser interfaces are hidden, however, there might be extra
          space visible around the element. Therefore, the small
          viewport-percentage units are &qouts;safer&qouts; to use in general, but might not
          produce the most attractive layout after a user starts interacting
          with the page. The small viewport size is represented by the sv prefix
          and results in the sv* viewport-percentage length units. The sizes of
          the small viewport-percentage units are fixed, and therefore stable,
          unless the viewport itself is resized.
        </p>
      </div>
       <div>
        <Link href="/viewport-unit">BACK</Link>
      </div>
    </div>
  );
}
