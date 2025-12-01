


export default function Page() {


    return (
        <div className="min-w-screen h-max">
            <div className="w-full h-[100vh] wrapper grid grid-cols-1 grid-rows-10 gap-2">
                <div className="div-container row-span-3 bg-lime-200 grid grid-cols-1 grid-rows-4 gap-2 p-4">
                    <div className="row-[1/4] bg-lime-300 border-2 border-white"></div>
                    <div className="row-start-4 bg-lime-400 border-2 border-white"></div>
                </div>
                <div className="div-container row-span-5 bg-lime-300 grid grid-cols-5 grid-rows-1 gap-2">
                    {
                        Array.from({ length: 5 }).map((_, index: number) => {
                            return <div key={index} className="p-4">
                                <div className="w-full h-full bg-lime-400 border-2 border-white rounded-2xl grid grid-cols-1 grid-rows-3">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-24 h-24 bg-slate-500 rounded-full">
                                            <svg className="w-full" data-slot="icon" fill="none" strokeWidth={1.5} stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                        </div>
                                        <p className="text-4xl my-2">NAME</p>
                                    </div>
                                    <div className="row-[2/-1] p-2">
                                        <div className="w-full h-full bg-slate-200 rounded-2xl"></div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="div-container row-span-2 bg-lime-400">
                </div>

            </div>
            <div className="w-full h-[100vh] wrapper">
                <div className="div-container bg-green-200">

                </div>

            </div>
            <div className="w-full h-[100vh] wrapper">
                <div className="div-container bg-emerald-200">

                </div>

            </div>

        </div>
    )
}