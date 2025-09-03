'use client'
import { useEffect, useRef, useState } from "react";


export default function Page() {
    const targetRef = useRef<HTMLDivElement>(null);
    const [observerEntry, setObserverEntry] = useState<IntersectionObserverEntry | null>(null)
    const [height, setHeight] = useState<number>(100);
    const handleOnClick = () => {
        if(height > 1000){  return alert('Enough!')};
        setHeight((prev) => prev + 100)
    }
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setObserverEntry(entry);
            } else {
                setObserverEntry(null)
            }
        })

        if (targetRef && targetRef.current)
            observer.observe(targetRef.current);


    }, [])

    return (
        <div className="w-max h-max relative">
            {observerEntry ? <aside className="fixed">
                <div className="p-4 text-xl bg-stone-900 dark:bg-stone-900">
                    <p>target: {observerEntry.target.tagName}, id: {observerEntry.target.id}</p>
                    <p>isIntersecting: {observerEntry.isIntersecting ? 'true' : 'false'}</p>
                    <p>intersectionRatio: {observerEntry.intersectionRatio}</p>
                    <div>
                        <p>intersectionRect :</p>
                        <div className="px-2">
                            <ul className="px-2">

                                <li>top: {observerEntry.intersectionRect.top}</li>
                                <li>bottom: {observerEntry.intersectionRect.bottom}</li>
                                <li>left: {observerEntry.intersectionRect.left}</li>
                                <li>right: {observerEntry.intersectionRect.right}</li>
                                <li>width: {observerEntry.intersectionRect.width}</li>
                                <li>height: {observerEntry.intersectionRect.height}</li>
                                <li>x: {observerEntry.intersectionRect.x}</li>
                                <li>y: {observerEntry.intersectionRect.y}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside> : null}
            <div style={{ height: `${height}vh` }} className={`w-screen flex items-center justify-center`}>
                <div className="fixed top-[50%] flex items-center justify-center animate-bounce">
                    <p className="text-3xl">Scroll Down</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[1.875rem]">
                        <path fillRule="evenodd" d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div id="targetBox" className="px-12 py-4 rounded-2xl flex items-center justify-center" ref={targetRef} >
                    <button className="font-bold bg-sky-500 hover:bg-sky-600 rounded-2xl px-4 py-2 cursor-pointer" onClick={handleOnClick}>TARGET</button>
                </div>
            </div>

        </div>
    )
}