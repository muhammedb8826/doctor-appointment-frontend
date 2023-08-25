import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  doctor: {},
  isLoading: true,
  error: null,
};

const url = 'https://doc-app-acos.onrender.com/api/v1/doctors';

export const getDoctors = createAsyncThunk('users/getDoctors', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const getDoctor = createAsyncThunk('user/getDoctor', async (id) => {
  const response = await axios.get(`https://doc-app-acos.onrender.com/api/v1/doctors/${id}`);
  return response.data;
});

export const addDoctor = createAsyncThunk('users/createDoctor', async ({
  name, description, specialization, imageUrl, cost,
}) => {
  const response = await axios.post('https://doc-app-acos.onrender.com/api/v1/doctors', {
    name, description, specialization, image_url: imageUrl, cost_per_session: cost,
  });
  return response.data;
});

export const deleteDoctor = createAsyncThunk('users/deleteDoctor', async (id) => {
  await axios.delete(`https://doc-app-acos.onrender.com/api/v1/doctors/${id}`);
  return id;
});

const doctorSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getDoctors.pending]: (state) => {
      state.isLoading = true;
    },
    [getDoctors.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getDoctors.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addDoctor.pending]: (state) => {
      state.isLoading = true;
    },
    [addDoctor.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    },
    [addDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteDoctor.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteDoctor.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((doctor) => doctor.id !== action.payload);
    },
    [deleteDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getDoctor.pending]: (state) => {
      state.isLoading = true;
    },
    [getDoctor.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    },
    [getDoctor.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    ,
  },
});

export default doctorSlice.reducer;
