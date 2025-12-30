export default function Page() {
  return (
    <div className="w-[100svw] h-[100svh] p-4 font-sans font-semibold">
      <div className="w-full h-full p-2 flex flex-col md:grid md:grid-cols-8 grid-cols-1 grid-rows-8 md:grid-rows-8 gap-3 ">
        <LeftButton />
        <Title />
        <MainContent />
        <SubContent />
        <FooterContent />
        <RightButton />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="rounded-2xl bg-[#005b63] flex flex-col justify-center row-[1/2] items-center md:col-start-2 md:col-span-6 ">
      <p className="text-center self-center font-bold text-6xl ">
        さよならエレジ-
      </p>
      <p className="text-2xl text-center self-center">菅田将暉</p>
    </div>
  );
}

function MainContent() {
  return (
    <div className="rounded-2xl col-[2/6] row-[2/-1] p-4 bg-[#005b63]">
      <iframe
        className="w-full h-full  rounded-2xl"
        src="https://www.youtube.com/embed/XSkpuDseenY?si=JhiR2pZCP37H2SUt"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function SubContent() {
  return (
    <div className=" rounded-2xl col-[6/8] row-[2/7] p-1 border-2 bg-[#005b63] border-black/20">
      <pre className="h-full p-1 font-sans overflow-scroll  custom-scrollbar text-white text-[clamp(9px,0.5vw+0.5rem,1rem)]">
        {`僕はいま　無口な空に
吐き出した孤独という名の雲
その雲が雨を降らせて
虹が出るどうせ掴めないのに
 
はじめてのキスを繰り返して欲しくて
 
愛が僕に噛みついて離さないと言うけれど
さみしさのカタチは変わらないみたいだ
舞い上がって行けいつか夜の向こう側
うんざりするほど光れ君の歌
 
 
やさしさが濁った日々の
憂鬱は満員電車みたいだ
 
冷めたぬくもりをむやみに放り投げた
 
僕が愛を信じてもきっといなくなるんだろ？
それならいらない哀しすぎるから
さようならさえも上手く言えなそうだから
手をふるかわりに抱きしめてみたよ
流れ星をみた流れ星をみた
願う僕の歌
 
そばにいるだけで本当幸せだったな
そばにいるだけでただそれだけでさ
 
愛が僕に噛みついて離さないと言うけれど
さみしさのカタチは変わらないみたいだ
舞い上がって行けいつか夜の向こう側
うんざりするほど光れ君の歌
もう傷つかないもう傷つけない
光れ君の歌`}
      </pre>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="rounded-2xl col-[6/8] row-[7/-1] overflow-scroll bg-[#005b63]">
      <iframe
        className="rounded-2xl"
        src="https://open.spotify.com/embed/track/3oYD2O31b05fILFpv0AXRI?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

function LeftButton() {
  return (
    <div className="col-[0/1] row-span-full place-content-center">
      <button className="w-full cursor-pointer opacity-50 hover:opacity-100">
        <svg
          className="w-full"
          data-slot="icon"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}

function RightButton() {
  return (
    <div className="col-[8/-1] row-span-full place-content-center">
      <button className="w-full cursor-pointer opacity-50 hover:opacity-100">
        <svg
          className="w-full"
          data-slot="icon"
          fill="none"
          strokeWidth={1.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
