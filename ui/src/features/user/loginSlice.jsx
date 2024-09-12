import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    // window.localStorage.getItem("token") ? true : false,
    role: window.localStorage.getItem("role") || null,
    username: window.localStorage.getItem("username"),
    id: window.localStorage.getItem("id"),
    profileImg: window.localStorage.getItem("profileImg")
    
}

export const loginSlice = createSlice({
    name:"loginSlice",
    initialState,
    reducers:{
        setUser:(state,action) => {
            state.isLoggedIn = true
            state.role = action.payload.role
            state.username = action.payload.username
            state.id = action.payload.id
            state.profileImg = action.payload.profileImg
        },
        logout:(state) => {
            state.isLoaggedIn = false;
            state.role = null;
            state.username = '';
            state.id = '';
            state.profileImg = '';
            window.localStorage.clear()
        }
    }
})

export const {setUser, logout} = loginSlice.actions
const loginReducer = loginSlice.reducer
export default loginReducer
