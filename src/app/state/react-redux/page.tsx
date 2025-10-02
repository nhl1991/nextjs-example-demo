'use client'
import { useAppSelector, useAppDispatch } from '@/src/redux/hook'
import { decrement, increment } from '@/src/redux/feature/counter/counterSlice'
import { store } from '@/src/redux/store'
import { Provider } from 'react-redux'
import { Counter } from '@/src/components/state/redux/counter'
export default function Page() {


    return (
        <main className="w-screen h-screen flex  items-center justify-center">
            <Provider store={store} >
                <Counter />
            </Provider>
        </main>
    )
}


