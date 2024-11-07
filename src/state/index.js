import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './postsSlice'
import modeSlice from "./darkLightMode"
const store = configureStore({ reducer: { postsSlice, modeSlice } })

export default store;