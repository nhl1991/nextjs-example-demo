'use client'
import Link from "next/link"

export default function Navigation() {

    return (
        <nav className="w-full h-max grid grid-cols-3 items-center  ">
            <button onClick={() => window.history.back()} className="p-1 hover:opacity-80 cursor-pointer justify-self-start">
                <svg
                    className="w-8" data-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
            </button>
            <div className="flex items-center justify-center">
                <Link href={"/"} className="p-1 hover:opacity-80">
                    <svg
                        className="w-8"
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
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                </Link>
                <h1 className="font-bold text-[2rem] p-1">Next.js Demos</h1>
            </div>
        </nav>
    )
}