'use client'
import { nestedStore } from "@/src/components/state/zustand/store"
import { ButtonHTMLAttributes, HTMLAttributes } from "react"

export default function Page() {
    const { nested, setNested } = nestedStore()
    const btnClass = 'px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 cursor-pointer' as HTMLAttributes<HTMLButtonElement>["className"];

    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center">
            <div>
                <div className="flex items-center justify-center gap-4 p-4 text-4xl">
                    <p>
                        {nested.country}
                    </p>
                    <p>
                        {nested.city}
                    </p>
                </div>
                <ul className="flex gap-4">
                    <li><button className={btnClass} onClick={() => setNested('TOKYO')}>TOKYO</button></li>
                    <li><button className={btnClass} onClick={() => setNested('KYOTO')}>KYOTO</button></li>
                    <li><button className={btnClass} onClick={() => setNested('OSAKA')}>OSAKA</button></li>
                    <li><button className={btnClass} onClick={() => setNested('SAPPORO')}>SAPPORO</button></li>
                </ul>
            </div>
            <div className="max-w-96 p-2">
                <p>The set function merges state at only one level. If you have a nested object, you need to merge them explicitly. You will use the spread operator pattern like so:</p>
            </div>
        </main>

    )
}