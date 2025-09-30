'use client'
import { configureStore } from '@reduxjs/toolkit' // RTK is already written in TypeScript, and its API is designed to provide a good experience for TypeScript usage.

import counterReducer from '@/src/redux/feature/counter/counterSlice'

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;