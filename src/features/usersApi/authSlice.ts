/* eslint-disable @typescript-eslint/no-explicit-any */

import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

interface AuthState {
    user : {
      id: number;
      token: string;
    };  
    isLoading: boolean;
    isError: boolean;
    error: string;
  }

  function hasResponseProperty(obj: any): obj is { response?: any } {
    return obj && typeof obj.response !== 'undefined';
  }

const initialState:AuthState={
    user: {
        id: 0,
        token: "",
      },
   isLoading:false,
   isError:false,
   error:"" 
}

export const signUp = createAsyncThunk(
    "auth/signUp",
    async ({ email,password }: { email: string; password: string }) => {
 
    try {
        
    const response =await axios.post("https://reqres.in/api/register",{email: email,
       password: password,
     }) 
      return response.data
   
    } catch (error) {

        if (hasResponseProperty(error)) {
            throw new Error(error.response?.data?.error || "An error occurred");
          } else {
            throw new Error("An unexpected error occurred");
          }
    }  
      
    }
  );


export const signIn = createAsyncThunk(
    "auth/signIn",
    async ({ email,password }: { email: string; password: string }) => {
     try {
        
        const response=await axios.post("https://reqres.in/api/login",{email: email,
       password: password,
     })
     return response.data; 
     } catch (error) {
        if (hasResponseProperty(error)) {
            throw new Error(error.response?.data?.error || "An error occurred");
          } else {
            throw new Error("An unexpected error occurred");
          }
     } 
    }
  );
export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
     try { 
      const response=await axios.post("https://reqres.in/api/logout")
     return response.data; 
     } catch (error) {
        if (hasResponseProperty(error)) {
            throw new Error(error.response?.data?.error || "An error occurred");
          } else {
            throw new Error("An unexpected error occurred");
          }
     } 
    }
  );



const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        restoreUser: (state, action) => {
            state.user = action.payload;
              },   
  },
    extraReducers: (builder) => {
      builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
        .addCase(signUp.fulfilled, (state, action ) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.error = "";
          localStorage.setItem("user", JSON.stringify(action.payload));
        })
        .addCase(signUp.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
         
        })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
        .addCase(signIn.fulfilled, (state, action ) => {
          state.user = action.payload;
          state.isLoading = false;
          state.isError = false;
          state.error = "";
          localStorage.setItem("user", JSON.stringify(action.payload));
        })
        .addCase(signIn.rejected, (state, action) => {       
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload as string;
        })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
        .addCase(logout.fulfilled, (state ) => {
          state.isLoading = false;
          state.isError = false;
          state.error = "";
          state.user={id:0,token:""}
       
        })
        .addCase(logout.rejected, (state, action) => {       
          state.isLoading = false;
          state.isError = true;
          state.error = action.payload as string;
        })
    },
  });
  
export const { restoreUser } = authSlice.actions;
export default authSlice.reducer;