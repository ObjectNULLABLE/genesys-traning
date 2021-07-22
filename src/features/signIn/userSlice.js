/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signIn = createAsyncThunk(
  'user/signIn',
  async (userCreds) => {
    const response = await axios.post('http://localhost:4000/api/auth/signin', userCreds);
    localStorage.setItem('accessToken', response.data.accessToken);
    return console.log(response.data);
  },
);
