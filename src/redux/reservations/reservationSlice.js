import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const url = 'https://doc-app-acos.onrender.com/api/v1/reservations';

export const addReservations = createAsyncThunk('users/addReservations', async ({
  startDate, endDate, city, cost, status, selectedDoctorId, id, username,
}) => {
  const response = await axios.post(url, {
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

export const getReservations = createAsyncThunk('users/getReservations', async ({ username }) => {
  const response = await axios.get(`https://doc-app-acos.onrender.com/api/v1/reservations?user_username=${username}`);
  return response.data;
});

export const deleteReservation = createAsyncThunk('users/deleteReservation', async (id) => {
  await axios.delete(`https://doc-app-acos.onrender.com/api/v1/reservations/${id}`);
  return id;
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
      state.data.push(action.payload);
    },
    [addReservations.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getReservations.pending]: (state) => {
      state.isLoading = true;
    },
    [getReservations.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getReservations.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteReservation.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteReservation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((reservation) => reservation.id !== action.payload);
    },
    [deleteReservation.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    ,
  }
  ,
});

export default reservationSlice.reducer;
