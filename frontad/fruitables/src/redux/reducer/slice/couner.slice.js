import { createSlice } from "@reduxjs/toolkit"



const initialstate = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialstate,
    reducers: {
        increment: (state, action) => {
            state.count += 1
        },
        decrement: (state, action) => {
            state.count -= 1
        }

    }

})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer