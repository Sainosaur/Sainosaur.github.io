import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    logoActive : window.localStorage.theme == "light" ? "white" : "black",
    logoInActive: window.localStorage.theme == "light" ? "black" : "white",
    theme: window.localStorage.theme ? window.localStorage.theme : "dark"
}

const logoSlice = createSlice({
    name: "Logo",
    initialState,
    reducers: {
        setThemeLight(state) {
            state.logoActive = "white"
            state.logoInActive = "black"
            state.theme = "light"
        }, setThemeDark(state) {
            state.logoActive = "black",
            state.logoInActive = "white"
            state.theme = "dark"
        }
    }
})

export const { setThemeLight, setThemeDark } = logoSlice.actions

export default logoSlice.reducer