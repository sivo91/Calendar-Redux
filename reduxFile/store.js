
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import daysReducer from './daysSlice'


export const store = configureStore({
  reducer: {
    userAuth: userReducer,
    selectedDays: daysReducer
  }
})




