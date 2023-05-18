import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

const initialState = {
    currVideo: null,
    loading: false,
    error: false
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            console.log("I wonder about it", state, action.payload)
            state.loading = false
            state.error = false
            state.currVideo = action.payload
        },
        fetchFailure: (state) => {
            state.loading = false
            state.error = true
        },
        like: (state, action) => {
            if (!state.currVideo.likes.includes(action.payload)) {
                state.currVideo.likes.push(action.payload)
                state.currVideo.dislikes.splice(state.currVideo.dislikes.findIndex(userId => userId === action.payload), 1)
            }
        },
        dislike: (state, action) => {
            if (!state.currVideo.dislikes.includes(action.payload)) {
                state.currVideo.dislikes.push(action.payload)
                state.currVideo.likes.splice(state.currVideo.likes.findIndex(userId => userId === action.payload), 1)
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { fetchStart, fetchFailure, fetchSuccess, like, dislike } = videoSlice.actions

export default videoSlice.reducer