import ItemCard from "./itemCard";


export default function ItemContainer() {
  const CITY = [
    {
      name: {jp:"東京", en: "Tokyo"},

      src: "/resource/cards/IMG_7386.JPEG",
      external_url: "https://www.gotokyo.org/",
    },
    {
      name: {jp:"愛知", en: "Aichi"},
      src: "/resource/cards/IMG_6762.JPEG",
      external_url: "https://aichinow.pref.aichi.jp/",
    },

    {
      name: {jp:"神奈川", en:"Kanagawa"},
      src: "/resource/cards/IMG_7946.JPEG",
      external_url: "https://trip.pref.kanagawa.jp/",
    },
    {
      name: {jp:"千葉", en:"Chiba"},
      src: "/resource/cards/IMG_8449.JPEG",
      external_url: "https://www.pref.chiba.lg.jp/",
    },
    {
      name: {jp:"大阪", en:"Osaka"},
      src: "/resource/cards/IMG_6123.JPEG",
      external_url: "https://osaka-info.jp/"
    }
  ];

  return (
    <div id="tour_info" className="w-screen h-screen transition-all bg-black/30 text-black flex items-center justify-center p-4 ">
      <div
        id="container"
        className="w-full h-full px-8 py-2 flex flex-col items-center justify-evenly gap-2  rounded-xl"
      >
        <div className="w-full">
          <h1 className="text-6xl font-extrabold  rounded-xl w-max px-3 py-3 text-white">
            都道府県
          </h1>
        </div>
        <section className=" w-full h-max flex gap-x-4 overflow-scroll py-2 px-4 ">

          {CITY.map((item, idx) => (
            <ItemCard key={idx} city={item} />
          ))}

        </section>
      </div>
    </div>
  );
}