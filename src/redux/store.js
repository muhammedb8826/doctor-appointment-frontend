import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctorSlice';
import userReducer from './users/userSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userReducer,
  },
});

export default store;
