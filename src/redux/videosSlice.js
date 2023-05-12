import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    video: null,
    loading: false,
    error: false
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            console.log("I wonder about it",  state, action.payload)
            state.loading = false
            state.error = false
            state.currUser = action.payload
        },
        loginFailure: (state) => {
            state.loading = false
            state.error = true
        },
        logout: (state) => {
            state.loading = false
            state.currUser = null
            state.error = false
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginStart, loginFailure, loginSuccess, logout } = videoSlice.actions

export default videoSlice.reducer