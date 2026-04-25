import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme") || "light",
    isPlaying: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleMusic: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, toggleMusic } = themeSlice.actions;
