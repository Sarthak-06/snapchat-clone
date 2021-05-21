import {  createSlice } from '@reduxjs/toolkit';


// const initialState = {
//   value: 0,
//   status: 'idle',
// };




export const appSlice = createSlice({
  name: 'app',
  initialState:{
    user:null,
    selectedImage:null

  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action) => {
      state.user  = action.payload;
    },
    logout: (state)=>{
      state.user=null;
    },
    selectImage:(state,action)=>{
      state.selectedImage=action.payload
    },
    resetImage:(state)=>{
        state.selectedImage=null;
    }
  },
  
  
});

export const { login,logout,selectImage,resetImage } = appSlice.actions;

export const selectapp = (state) => state.app.value;
export const selectUser = (state)=>state.app.user;
export const selectSelectedImage=(state)=>state.app.selectedImage;


export default appSlice.reducer;
