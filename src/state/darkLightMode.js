import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: localStorage.getItem("theme") || "light" };

const themeSlice = createSlice({
      name: "theme",
      initialState,
      reducers: {
            light: (state) => {
                  state.mode = "light"
                  localStorage.setItem("theme", "light")
            },
            dark: (state) => {
                  state.mode = "dark"
                  localStorage.setItem("theme", "dark")
            }
      }
})
export const { light, dark } = themeSlice.actions;
export default themeSlice.reducer;