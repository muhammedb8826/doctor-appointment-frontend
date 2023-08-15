import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctors/doctorSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});

export default store;
