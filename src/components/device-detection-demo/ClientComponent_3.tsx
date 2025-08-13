'use client'

import { useSearchParams } from "next/navigation";
import Wrapper from "./ui/Wrapper";
import ComponentName from "./ui/ComponentName";

export default function ClientComponent3() {

    const searchParams = useSearchParams();
    const userAgent = searchParams.get('viewport');
    console.log(searchParams)
    return (
        <Wrapper>
            <ComponentName>CLIENT-COMPONENT 3</ComponentName>
            <div className="flex flex-col items-center justify-center p-2">
                <p className="">Use <code>{`userAgent()`}</code>from @next/server and append it to searchParams in headers.</p>
                <p className="p-2">{userAgent?.toUpperCase()} </p>
                <p className="p-2">{userAgent === 'mobile' ? 'width < 768' : 'width > 768'} </p>
                <div className={`w-4 h-4 rounded-full ${userAgent === 'mobile' ? `bg-red-500` : `bg-green-500`}`}>
                </div>
            </div>
        </Wrapper>
    )
}