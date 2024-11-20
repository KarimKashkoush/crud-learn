import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './postsSlice'
import themeSlice from "./darkLightMode"
const store = configureStore({ reducer: { postsSlice, themeSlice } })

export default store;