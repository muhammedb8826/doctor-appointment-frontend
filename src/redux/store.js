import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctorSlice';
import userReducer from './users/userSlice';
import reservationReducer from './reservations/reservationSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userReducer,
    reservation: reservationReducer,
  },
});

export default store;
