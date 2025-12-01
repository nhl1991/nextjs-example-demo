"use client";

export default function Intro() {

  const handleOnClick = () => {
    const el = document.getElementById("tour_info");
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="bg-mask"
      className="w-screen h-screen flex flex-col items-center justify-center  font-extrabold"
    >
      <div id="text" className="w-full flex items-center px-16 text-[clamp(4rem,6rem+5vw,12rem)] bg-black/30">
        VISIT
      </div>
      <div
        id="title"
        className="w-full flex items-center text-white justify-center bg-zinc-400 text-[14rem] blend"
      >
        <p>日</p>
        <p>本</p>
      </div>
      <div
        id="text"
        className="w-full flex items-center justify-end px-8 md:px-16 text-[clamp(1rem,1.5rem+2vw,4rem)] gap-x-4 bg-black/30 "
      >
        <label htmlFor="scroll_next" className=" cursor-pointer text-white">SEE MORE</label>
        <button
          id="scroll_next"
          className="rounded-full flex items-center p-1 justify-center bg-black"
          onClick={handleOnClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 md:w-12"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
