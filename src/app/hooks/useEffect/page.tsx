'use client'
import { useEffect, useState } from "react";

export default function Page(){

    const [count,setCount] = useState(0);

    console.log('Out of useEffect', count);

    useEffect(()=>{
        console.log('Inside of useEffect')

        return () => alert('Leave this page.')
    },[])


    return(
        <section className="w-screen h-screen flex flex-col items-center justify-center">
            <h1>{count}</h1>
            <button onClick={()=>setCount((prev)=> prev+1)}>Count up</button>
            <ParentNode />
        </section>
    )
}

function ParentNode(){
    console.log('==> out of parent useEffect')

    useEffect(()=>{
        console.log('==> Parent Rendered!')
    })

    return(
        <div className="bg-sky-500">
            <h1>Parent</h1>
            <ChildrenNode />
        </div>
    )
}
function ChildrenNode(){
    console.log('==> out of child useEffect')

    useEffect(()=>{
        console.log('==> Children Rendered!')
    })

    return(
        <div className="bg-sky-500">
            <h1>Children</h1>
        </div>
    )
}