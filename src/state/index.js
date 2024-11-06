import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './postsSlice'

const store = configureStore({ reducer: { postsSlice } })

export default store;