import {configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'
import hamburgerSlice from './slices/hamburgerSlice';
import thunk from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), thunk];
const store = configureStore ({
    reducer:{
        NavbarControl : hamburgerSlice
    }
})

export default store;