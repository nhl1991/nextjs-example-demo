
export default function ComputedStyle({ box_sizing, }: Readonly<{ box_sizing: string }>) {


    return (
        <>
            <div className="w-full h-full p-4 ">
                <div className="w-full h-full p-4 dark:text-black">
                    <h1 className="absolute text-sm p-2">border</h1>
                    <div className={box_sizing == 'border' ? "w-full h-48 bg-orange-200 p-8 border-2 border-black dark:border-blue-700" : "w-full h-48 bg-orange-200 p-8 border-2 border-dotted"}>
                        <h1 className="absolute text-sm p-2">padding</h1>
                        <div className='w-full h-full border-2 bg-green-200 p-8'>
                            <h1 className="absolute text-sm p-2">content</h1>
                            <div className={box_sizing == 'border' ? "w-full h-full border-2 bg-blue-200 border-dotted" : "w-full h-full border-2 bg-blue-200 border-black dark:border-blue-700"}>

                            </div>
                        </div>
                    </div>
                </div>
                If box is set to width: 100px, and padding: 4px, border: 2px, {box_sizing} is included as width.
                <h1 className="text-sm my-2">
                width(100px) = 
                {box_sizing == 'border' ? " border(2px) + padding(4px) + content(94px)" : " content(100px)"}
                </h1>
            </div>
        </>
    )
}