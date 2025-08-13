'use client'
import { faCopy, faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useRef, useState } from "react";

export default function Page() {
    const copyRef = useRef<HTMLInputElement | null>(null);
    const pasteRef = useRef<HTMLInputElement | null>(null);
    const [mode, setMode] = useState(true);
    const onCopy = () => {
        if (!copyRef.current) return;
        const el = copyRef.current
        try {
            navigator.clipboard.writeText(el.value)
            alert('Copied!')
        } catch (error) {
            console.error(error);
        }
    }

    const onPaste = () => {
        if (!pasteRef.current) return;
        const el = pasteRef.current
        try {
            navigator.clipboard.readText().then((res) => {
                el.value = res;
            })

        } catch (error) {
            console.error("Err");
        }
    }


    return (
        <div className="w-screen h-screen">
            <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <div className="w-1/2">
                    <><b>INPUT:</b> <button className={`px-2 border-2 rounded-xl ${mode ? 'border-lime-500' : 'border-red-500'}`} onClick={() => setMode(!mode)}>{`${mode ? 'ON' : 'OFF'}`}</button></>
                </div>
                <div className="w-1/2 flex border-2 border-gray-400 rounded-2xl">
                    {mode ? <input type="text" className="w-full py-2 px-4 outline-none" ref={copyRef} placeholder="Type something here and copy it." /> : <p className="w-full p-2">Click the copy button and paste it below.</p>}
                    <button className="active:scale-105" onClick={onCopy}>
                        <FontAwesomeIcon className="p-2" icon={faCopy as IconProp} />
                    </button>
                </div>
                <div className="w-1/2 flex border-2 border-gray-400 rounded-2xl">
                    <input disabled className="w-full py-2 px-4 outline-none" ref={pasteRef} type="text" placeholder="You can paste the text here." />
                    <button className="active:scale-105" onClick={onPaste}>
                        <FontAwesomeIcon className="p-2" icon={faPaste as IconProp} />
                    </button>
                </div>
                <div className="w-full flex h-full bg-red-300">

                </div>
            </div>
        </div>
    );
}