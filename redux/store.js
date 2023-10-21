// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // You need to create this.
import counter from './slices/counter';
import bookingForm from './slices/showShipmentBookingForm'

const store = configureStore({
    reducer: {
        counter,
        bookingForm
    }
});

export default store;
