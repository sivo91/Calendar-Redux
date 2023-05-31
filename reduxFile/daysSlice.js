
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: []
}

const daySlice = createSlice({
   name: 'selectedDays',
   initialState,
   reducers: {
    addDay: (state, action) => {
      state.days += action.payload
    }
   }
})

export const {addDay} = daySlice.actions
export default daySlice.reducer