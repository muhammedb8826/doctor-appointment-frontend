import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: [],
  isLoggedIn: localStorage.getItem('user'),
  isLoading: true,
  error: null,
};

const url = 'http://localhost:3001/api/v1/users';

export const createUsers = createAsyncThunk('users/getUsers', async ({ name, username }) => {
  try {
    const response = await axios.post(url, { name, username });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const getUsers = createAsyncThunk('users/getUsers', async ({ username }) => {
  try {
    const response = await axios.post('http://localhost:3001/api/v1/login', { username });
    return response.data;
  } catch (error) {
    error.message = 'Username does not exist';
    return error.message;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: {
    [createUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [createUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [createUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    ,
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
