import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const hamburgerSlice = createSlice({
    name:'NavbarControl',
    initialState:{
        isOpen : true,
    },
    reducers:{
        isNavBarOpen(state,action){
            state.isOpen = action.payload
        }
    }
})

export const {isNavBarOpen} = hamburgerSlice.actions

export default hamburgerSlice.reducer;
