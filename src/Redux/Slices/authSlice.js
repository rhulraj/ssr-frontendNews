import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstanse from "../../Helper/axiosInstance"
import toast from "react-hot-toast"

const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') === 'true' : false;
const admin = typeof window !== 'undefined' ? localStorage.getItem('admin') === 'true' : false

const data =  typeof window !== 'undefined' ? localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')) : {}

const initialState = {
    isLoggedIn : isLoggedIn || false,
    admin : admin || false ,
    data : data

}

export const login = createAsyncThunk("/auth/login" , async(data)=>{
    const response = axiosInstanse.post('/auth/login' , data)
    toast.promise(response, {
        success : (resolvePromise)=>{
            return resolvePromise?.data?.message
        },
        loading : "Hold back tight,",
        error: "something went wrong"
    } )
    const apiResponse = await response;
    return apiResponse

})

export const  logOUt = createAsyncThunk('auth/logOut' , async()=>{
    const response = axiosInstanse.post('/auth/logOut')
    toast.promise(response, {
        success : (resolvePromise)=>{
            return resolvePromise?.data?.message
        },
        loading : "Hold back tight,",
        error: "something went wrong"
    })
    const apiResponse = await response;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder.addCase(login.fulfilled, (state , action)=>{
            state.isLoggedIn = true;
            // state.data = action.payload.data.data.userData,
            localStorage.setItem('data', JSON.stringify(action?.payload?.data?.data.userData,))
            localStorage.setItem('isLoggedIn', true);
            if(action?.payload?.data?.data.userData.email === 'rahulanku51@gmail.com'){
                state.admin = true
                localStorage.setItem('admin', true)
            }
        })
        builder.addCase(logOUt.fulfilled, (state, action)=>{
            state.isLoggedIn = false;
            // state.data = "",
            // state.admin = false,

            localStorage.setItem('data', "")
            localStorage.setItem('isLoggedIn', false); 
            localStorage.setItem('admin', false)
        })
    }
})

export default authSlice.reducer

