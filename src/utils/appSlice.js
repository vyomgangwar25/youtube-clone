import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        video:[],
        category:"All"
    },
    reducers:{
        toggleMenu:(state)=>{
      state.isMenuOpen =!state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        },
        setHomeVideo:(state,action)=>{
            state.video=action.payload
        },
        setcategory:(state,action)=>{
            state.category=action.payload
        }
    }
})
export const{toggleMenu,closeMenu,setHomeVideo,setcategory}=appSlice.actions
export default appSlice.reducer