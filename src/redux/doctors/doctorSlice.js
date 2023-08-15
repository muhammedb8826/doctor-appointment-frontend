import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const url = 'https://jsonplaceholder.typicode.com/users';

export const getDoctors = createAsyncThunk('users/getDoctors', async () => {
  const response = await axios.get(url);
  return response.data;
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
  },
});

export default doctorSlice.reducer;
