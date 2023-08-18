import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const url = 'http://localhost:3001/api/v1/reservations';

export const addReservations = createAsyncThunk('users/getDoctors', async ({
  startDate, endDate, city, cost, status, selectedDoctorId, id, username,
}) => {
  const response = await axios.get(url, {
    start_date: startDate,
    end_date: endDate,
    city,
    cost,
    status,
    doctor_id: selectedDoctorId,
    user_id: id,
    user_username: username,
  });

  return response.data;
});

const reservationSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [addReservations.pending]: (state) => {
      state.isLoading = true;
    },
    [addReservations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [addReservations.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    ,
  }
  ,
});

export default reservationSlice.reducer;
