import { createSlice } from "@reduxjs/toolkit";

export const navbarActiveSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false
    },
    reducers: {
        navbarActive: (state) => {
            state.value = !state.value
        }
    },
})

export const { navbarActive } = navbarActiveSlice.actions

export default navbarActiveSlice.reducer