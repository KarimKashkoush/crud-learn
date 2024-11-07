import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: localStorage.getItem("mode") || "light" }
const modeSlice = createSlice({
      name: "mode",
      initialState,
      reducers: {
            light: (state) => {
                  state.mode = "light"
                  localStorage.setItem("mode", "light")
            },
            dark: (state) => {
                  state.mode = "dark"
                  localStorage.setItem("mode", "dark")
            }
      }
})

export const { light, dark } = modeSlice.actions;
export default modeSlice.reducer;