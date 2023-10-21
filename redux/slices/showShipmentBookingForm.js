// reducers/counter.js
import { createSlice } from '@reduxjs/toolkit';

const bookingFormSlice = createSlice({
    name: 'showingBookingForm',
    initialState: {
        show: true
    },
    reducers: {
        showForm:(state) => {
            state.show = false;
       
        }
    }
});

export const { showForm } = bookingFormSlice.actions;
export default bookingFormSlice.reducer;
