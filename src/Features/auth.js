import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    login_status : false,
    userData : null
}

export const AuthSlicer = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state,action) => {
            state.login_status = true ;
            state.userData = action.payload.userData;
        },
        logout : (state,action) => {
            state.login_status = false;
            state.userData = null;
        }
    }
    
})

export const {login,logout} = AuthSlicer.actions


const authslicer = AuthSlicer.reducer
export default authslicer