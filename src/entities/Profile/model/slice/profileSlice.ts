import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {Profile, ProfileSchema} from "../types/profile";

const initialState: ProfileSchema = {
    data: null,
    error: null,
    isLoading: false,
    readonly: true
}
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
           state.data = action.payload
        }

    }
})

// Action creators are generated for each case reducer function
export const {actions: profileActions} = profileSlice

export const {reducer: profileReducer} = profileSlice