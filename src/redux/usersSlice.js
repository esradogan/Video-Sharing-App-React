import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currUser: null,
    loading: false,
    error: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        loginStart: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            console.log("I wonder about it", state, action.payload)
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
        subscription: (state, action) => {
            !state.currUser.subscribedUsers.includes(action.payload) ? state.currUser.subscribedUsers.push(action.payload)
                : state.currUser.subscribedUsers.splice(state.currUser.subscribedUsers.findIndex(channelId => channelId === action.payload), 1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { loginStart, loginFailure, loginSuccess, logout, subscription } = userSlice.actions

export default userSlice.reducer