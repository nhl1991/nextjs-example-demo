'use client'
import LinkContainer from "@/src/components/ui/LinkContainer";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Page() {

    const [count, setCount] = useState(0);
    const route = useRouter();
    console.log('Page.tsx : This message printed before browser rendering.');
    useLayoutEffect(() => {
        const shouldRender = confirm('This useLayout called before Browser start rendering. Browser will start rendering. Should we start?')

        if (!shouldRender) {
            return route.back();
        }

    }, [route])

    useEffect(() => {
        console.log('Page.tsx : Rendered.')
        // setMessage((prev) => [...prev, ' q.tsx : Rendered.'])

        return () => alert('Leave this page.')
    }, [])


    return (
        <section className="w-screen h-screen flex items-center justify-center">
            <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
                <h1 className="text-center text-6xl">{count}</h1>
                <button className="active:bg-sky-600 rounded-xl w-max px-4 py-0.5" onClick={() => setCount((prev) => prev + 1)}>Count up</button>
                <ParentNode />
                <div>
                    <LinkContainer link="/data-fetch" />
                </div>
            </div>
            <div className="max-w-1/2">
                <pre>
                    <p> *Page.tsx</p>
                    <code>
                        {`console.log('Page.tsx : This message printed before browser rendering.');
    useLayoutEffect(() => {
        const shouldRender = confirm('This useLayout called before Browser start rendering. 
        Browser will start rendering. Should we start?')

        if (!shouldRender) {
            return route.back();
        }

    }, [route])`}
                    </code>
                </pre>
                <pre>
                    <p> **ParentComponent</p>
                    <code>
                        {` console.log('<ParentNode /> : This message printed before browser rendering.')
    useEffect(() => {
        console.log('<ParentNode /> : Rendered.')
    })`}
                    </code>
                </pre>
                <pre>
                    <p> ***ChildrenNode</p>
                    <code>
                        {`console.log('<ChildNode> : This message printed before browser rendering.')
    useEffect(() => {
        console.log('<ChildNode> : Rendered.')
    })`}
                    </code>
                </pre>

            </div>
        </section>
    )
}

function ParentNode() {
    console.log('<ParentNode /> : This message printed before browser rendering.')

    useEffect(() => {
        console.log('<ParentNode /> : Rendered.')
    })

    return (
        <div className="bg-sky-500">
            <h1>Parent</h1>
            <ChildrenNode />
        </div>
    )
}
function ChildrenNode() {
    console.log('<ChildNode> : This message printed before browser rendering.')

    useEffect(() => {
        console.log('<ChildNode> : Rendered.')
    })

    return (
        <div className="bg-sky-500">
            <h1>Children</h1>
        </div>
    )
}