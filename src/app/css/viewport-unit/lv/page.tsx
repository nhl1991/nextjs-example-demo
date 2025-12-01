import Link from "next/link";

export default function Page() {
  return (
    <div className="w-lvw h-lvh flex flex-col items-center justify-center bg-violet-500">
      <div className="w-[32rem]">
        <h1 className="text-xl">Large viewport units</h1>
        <p>
          When you want the largest possible viewport in response to browser
          interfaces retracting dynamically, you should use the large viewport
          size. The large viewport size allows the content you design to fill
          the entire viewport when browser interfaces are retracting. You need
          to be aware that the content might get hidden when browser interfaces
          expand. For example, on mobile phones where screen real-estate is at a
          premium, browsers often hide part or all of the title and address bar
          after a user starts scrolling the page. When an element is sized using
          a viewport-percentage unit based on the large viewport size, the
          content of the element will fill the entire visible page when these
          browser interfaces are hidden. However, when these retractable browser
          interfaces are shown, they can hide the content that is sized or
          positioned using the large viewport-percentage units. The large
          viewport unit is represented by the lv prefix and results in the lv*
          viewport-percentage units. The sizes of the large viewport-percentage
          units are fixed and therefore stable, unless the viewport itself is
          resized.
        </p>
      </div>
      <div>
        <Link href="/viewport-unit">BACK</Link>
      </div>
    </div>
  );
}
