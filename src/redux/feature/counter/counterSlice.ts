import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


// Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated.

// Redux requires that we write all state updates immutably, by making copies of data and updating the copies. 

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
 /**
  * In some cases, TypeScript may unnecessarily tighten the type of the initial state. 
  * If that happens, you can work around it by casting the initial state using as, instead of declaring the type of the variable:
  */
  value: 0, 
} // as CounterState
export const counterSlice = createSlice({
    name: 'counter',
    initialState, // `createSlice` will infer the state type from the `initialState` argument
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes.
        // Also, no return statement is required from these functions.
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByValue: (state, action) => { state.value  += action.payload} //
    }
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value


export default counterSlice.reducer