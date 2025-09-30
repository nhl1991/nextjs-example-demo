import { create } from "zustand";


export const nestedStore = create<State&Action>((set) => ({
    nested: { country: 'JAPAN', city: 'OSAKA' },
    setNested: (value) => set((state) => ({
        nested: { ...state.nested, city: value }
    }))
}))


export type State = {
    nested: { country: string, city: string }
}

export type Action = {
    setNested: (value: string) => void
}