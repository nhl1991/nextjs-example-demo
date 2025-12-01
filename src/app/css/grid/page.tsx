import Link from "next/link";

export default function Page(){



    return(
        <div className="w-screen h-screen p-12 flex flex-col items-center justify-center">
            <div className="w-max h-max max-w-full max-h-full">
                <ul className="flex flex-row">
                    <li><Link href={'grid/grid1'}>GRID1</Link></li>
                    <li><Link href={'grid/grid2'}>GRID2</Link></li>
                    <li><Link href={'grid/grid3'}>GRID3</Link></li>
                    <li><Link href={'grid/grid4'}>GRID4</Link></li>
                    <li><Link href={'grid/grid5'}>GRID5</Link></li>
                </ul>
            </div>
            
        </div>
    )
}