'use client'
import { decrement, increment } from "@/src/redux/feature/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/src/redux/hook"


export function Counter() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()


    return (
        <div className='flex flex-col items-center justify-center'>
            <p aria-label='value' className='text-4xl'>{count}</p>
            <div className='flex items-center justify-center gap-4'>

                <button
                    className='px-2 py-1 rounded-2xl active:bg-sky-400'
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}>
                    increment
                </button>
                <button
                    className='px-2 py-1 rounded-2xl active:bg-sky-400'
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}>decrement
                </button>


            </div>
        </div>
    )
}