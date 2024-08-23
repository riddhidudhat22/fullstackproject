import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { baseURL, baseURL1 } from "../../../utils/baseURL";
import axiosInstance from "../../../utils/axiosinstance";

const initialstate = {
    isAuthantication: false,
    isLogedout: true,
    isLoading: false,
    user: null,
    error: null
}

export const register = createAsyncThunk(
    "users/register",
    async (data, { rejectWithValue }) => {
        try {
            console.log(data);
            // const response = await axiosInstance.post("users/ragisterusers", data)
            const response=await axiosInstance.post('users/ragisterusers',data)
            console.log(response);

            if (response.status === 200) {
                return response.data
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue("registration Error:" +error.response.data.message)
        }
    }
)

export const login = createAsyncThunk(
    "users/login",
    async (data, { rejectWithValue }) => {
        try {
            console.log(data);
            const response = await axiosInstance.post("users/loginusers", data)
            console.log(response);
            if (response.status === 200) {
               console.log("fffffff");
               localStorage.setItem("_id",response.data.data._id)
               console.log("+++++++",response.data.data._id);
                return response.data
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue("login Error:" + error.response.data.message)
        }
    }
)


export const logout = createAsyncThunk(
    "users/logout",
    async (_id, { rejectWithValue }) => {
        try {
            console.log(_id);
            const response = await axiosInstance.post("users/logout", { _id});
            console.log(response);
            
        } catch (error) {
            console.log(error);
            return rejectWithValue("logout Error:" + error.response.data.message)
        }
    }
)
export const authcheck=createAsyncThunk(
    "users/authcheck",
    async(_,{rejectWithValue})=>{
        try {
            const response=await axiosInstance.get("users/authcheck")
            console.log(response);
            if(response.data.success){
                return response.data
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue("logout Error:" + error.response.data.message)
        }
    }
)
const authSlice = createSlice({
    name: 'auth',
    initialState: initialstate,
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.isAuthantication = false;
            state.isLogedout = true;
            state.isLoading = false;
            state.user = action.payload.data;
            state.error = null;
        })

        builder.addCase(register.rejected, (state, action) => {
            state.isAuthantication = false;
            state.isLogedout = true;
            state.isLoading = false;
            state.user = action.null;
            state.error = action.payload;
        })

        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action);
            
            state.isAuthantication = true;
            state.isLogedout = false;
            state.isLoading = false;
            state.user = action.payload.data;
            state.error = null;
        })

        builder.addCase(login.rejected, (state, action) => {
            state.isAuthantication = false;
            state.isLogedout = true;
            state.isLoading = false;
            state.user = action.null;
            state.error = action.payload;
        })

        builder.addCase(logout.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isAuthantication = false;
            state.isLogedout = true;
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        })

        builder.addCase(authcheck.fulfilled, (state, action) => {
            console.log(action);
            
            state.isAuthantication = true;
            state.isLogedout = false;
            state.isLoading = false;
            state.user = action.payload.data;
            state.error = null;
        })

        builder.addCase(authcheck.rejected, (state, action) => {
            state.isAuthantication = false;
            state.isLogedout = true;
            state.isLoading = false;
            state.user = action.null;
            state.error = action.payload;
        })

    }
})

export default authSlice.reducer;