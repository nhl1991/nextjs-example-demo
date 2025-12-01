
export default function Section() {

    return (
        <section className="col-[1/11] row-[2/10] p-4 ">
            <div className="w-full h-full  grid grid-cols-5 grid-rows-5 p-4 gap-0.5">
                <div className="col-[1/4] row-start-1 p-2 ">
                    <div id="container" className="w-full h-full flex items-center justify-center alignDivText bg-gray-600/50 rounded-2xl   ">
                        TOP SECTION
                    </div>
                </div>
                <div className="col-[1/4] row-[2/5] p-2">
                    <div id="container" className="w-full h-full bg-gray-600/50 rounded-2xl flex items-center justify-center alignDivText">
                        SECTION
                    </div>
                </div>
                <div className="col-[1/4] row-start-5 p-2">
                    <div id="container" className="w-full h-full  alignDivText grid grid-cols-6 grid-rows-1">
                    {
                        Array.from({ length: 6 }).map((_, index: number) => {
                            return <div  key={index} className="w-full h-full p-4 rounded-full">
                                <div id="container" className="w-full h-full alignDivText flex items-center justify-center text-sm bg-gray-600/50 rounded-2xl    hover:scale-105 delay-100 transition-all">SUBNAV{index}</div>
                            </div>
                        })
                    }
                    </div>
                </div>
                <div  className="col-[4/6] row-[1/6] grid grid-cols-2 grid-rows-6 gap-4">
                    {
                        Array.from({ length: 6 }).map((_, index: number) => {
                            return <div  key={index} className="row-span-2 p-4">
                                <div id="container" className="w-full h-full alignDivText text-4xl bg-gray-600/50 rounded-2xl flex items-center justify-center  hover:scale-105 delay-100 transition-all">{index}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}